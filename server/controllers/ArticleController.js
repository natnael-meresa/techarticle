const express = require('express');
const router = express.Router();
const User = require('../src/models/User')
const Article = require('../src/models/Article')
const Comment = require('../src/models/Comment')
const VerifyToken = require('./VerifyToken')
const OptionalToken = require('./optionalVerify')

// Preload article objects on routes with ':article'
router.param('article', function(req, res, next, slug) {
	Article.findOne({ slug: slug})
	  .populate('author')
	  .then(function (article) {
		if (!article) { return res.sendStatus(404); }
  
		req.article = article;
  
		return next();
	  }).catch(next);
  });



  router.param('comment', function(req, res, next, id) {
	Comment.findById(id).then(function(comment){
	  if(!comment) { return res.sendStatus(404); }
  
	  req.comment = comment;
  
	  return next();
	}).catch(next);
  });

// Preload article objects on routes with ':article'
// router.param('article', function(req, res, next, slug) {
// 	Article.findOne({ slug: slug})
// 	  .populate('author')
// 	  .then(function (article) {
// 		if (!article) { return res.sendStatus(404); }
  
// 		req.article = article;
  
// 		return next();
// 	  }).catch(next);
//   });

router.post('/create', VerifyToken,  function(req, res, next) {

	User.findById(req.userId, {password: 0}, function (err, user) {
	if (err) return res.status(500).send("There was a problem finding the user.");
	if (!user) return res.status(404).send("No user found Sorray.");


		console.log(`user1:--- ${user}`)

		Article.create({
			title: req.body.title,
			body: req.body.body,
			description: req.body.description,
			tagList: req.body.tagList,
			author: user._id,

		}, function(err, article) {

			console.log(`errores:--- ${err}`)

			if (err) return res.status(500).send("There was a problem createing the Article.")

			res.status(200).send({article: article})
		})

	})

});



  router.get('/articles/:slug/comments', function(req, res, next) {
	  console.log('inside comments')
	  console.dir(req.params)
	  var sg = req.params.slug;
	  console.log(`slug-- fo comments--${sg}`)


	  Article.findOne({ slug: sg})
	  .populate('author')
	  .then(function (article) {
		if (!article) { return res.sendStatus(404); }

		res.status(200).send({ comments: article.comments })
	  }).catch(next);


  })

  router.get('/articles', OptionalToken, function(req, res, next) {
	  console.log('hittedj oo------------------------------------------------dd')
	var query = {};
	var limit = 20;
	var offset = 0;
  
	if(typeof req.query.limit !== 'undefined'){
	  limit = req.query.limit;
	}
  
	if(typeof req.query.offset !== 'undefined'){
	  offset = req.query.offset;
	}
  
	if( typeof req.query.tag !== 'undefined' ){
	  query.tagList = {"$in" : [req.query.tag]};
	}
  
	Promise.all([
	  req.query.author ? User.findOne({username: req.query.author}) : null,
	  req.query.favorited ? User.findOne({username: req.query.favorited}) : null
	]).then(function(results){
	  var author = results[0];
	  var favoriter = results[1];
  
	  if(author){
		query.author = author._id;
	  }
  
	  if(favoriter){
		query._id = {$in: favoriter.favorites};
	  } else if(req.query.favorited){
		query._id = {$in: []};
	  }
  
	  return Promise.all([
		Article.find(query)
		  .limit(Number(limit))
		  .skip(Number(offset))
		  .sort({createdAt: 'desc'})
		  .populate('author')
		  .exec(),
		Article.count(query).exec(),
		req.userId ? User.findById(req.userId) : null,
	  ]).then(function(results){
		var articles = results[0];
		var articlesCount = results[1];
		var user = results[2];

		console.log('@@@@@@@@@@@@@@@@@@@@@@@@2@edj oo------------------------------------------------dd')
		console.log(user)
		res.status(200).send({
			articles: articles.map(function(article){
				return article.toJSONFor(user);
			}),
			articlesCount: articlesCount
		  });

		//   return res.json({
		// 	articles: articles.map(function(article){
		// 	  return article
		// 	}),
		// 	articlesCount: articlesCount
		//   });
	  });
	}).catch(next);
  });
  
  router.get('/articles/feed', VerifyToken, function(req, res, next) {
	var limit = 20;
	var offset = 0;
  
	if(typeof req.query.limit !== 'undefined'){
	  limit = req.query.limit;
	}
  
	if(typeof req.query.offset !== 'undefined'){
	  offset = req.query.offset;
	}
  
	User.findById(req.userId).then(function(user){
	  if (!user) { return res.sendStatus(401); }
  
	  Promise.all([
		Article.find({ author: {$in: user.following}})
		  .limit(Number(limit))
		  .skip(Number(offset))
		  .populate('author')
		  .exec(),
		Article.count({ author: {$in: user.following}})
	  ]).then(function(results){
		  console.log(`results: -- ${results}`)
		var articles = results[0];
		var articlesCount = results[1];
  
		return res.json({
		  articles: articles.map(function(article){
			return article.toJSONFor(user);
		  }),
		  articlesCount: articlesCount
		});
	  }).catch(next);
	});
  });


  router.get('/:article', VerifyToken, function(req, res, next) {
	console.log('errror is here')
	// Promise.all([
	//   req.payload ? User.findById(req.payload.id) : null,
	//   req.article.populate('author').execPopulate()
	// ]).then(function(results){
	//   var user = results[0];
  
	//   return res.json({article: req.article.toJSONFor(user)});
	// }).catch(next);
	const slug = req.params.article;
	console.log(`idddds:----${slug}`)
	// Article.find({slug:  slug}, function(err, article) {
	// 	if(err){
	// 		console.log(`error is here: ${err}`)
	// 		res.status(404).send({msg: 'article not found'})
	// 	} 

	// 	console.log(`article inside article: ${article}`)
	// 	res.status(200).send({article: article})
 	// })

	 Article.findOne({ slug: slug})
	 .populate('author')
	 .then(function (article) {
	   if (!article) { return res.sendStatus(404); }

	   console.log(`article inside article: ${article}`)
	   res.status(200).send({article: article})
	 }).catch(next);
  });



// Favorite an article
router.post('/articles/:article/favorite', VerifyToken , function(req, res, next) {
	var articleId = req.article._id;
   
	User.findById(req.userId).then(function(user){
	  if (!user) { return res.sendStatus(401); }
  
	  return user.favorite(articleId).then(function(){
		return req.article.updateFavoriteCount().then(function(article){
		  return res.json({article: article.toJSONFor(user)});
		});
	  });
	}).catch(next);
  });
  
  // Unfavorite an article
  router.delete('/articles/:article/favorite', VerifyToken , function(req, res, next) {
	var articleId = req.article._id;
  
	User.findById(req.userId).then(function (user){
	  if (!user) { return res.sendStatus(401); }
  
	  return user.unfavorite(articleId).then(function(){
		return req.article.updateFavoriteCount().then(function(article){
		  return res.json({article: article.toJSONFor(user)});
		});
	  });
	}).catch(next);
  });

// return an article's comments
router.get('/articles/:article/comments', OptionalToken, function(req, res, next){
	Promise.resolve(req.userId ? User.findById(req.userId) : null).then(function(user){
	  return req.article.populate({
		path: 'comments',
		populate: {
		  path: 'author'
		},
		options: {
		  sort: {
			createdAt: 'desc'
		  }
		}
	  }).execPopulate().then(function(article) {
		return res.json({comments: req.article.comments.map(function(comment){
		  return comment.toJSONFor(user);
		})});
	  });
	}).catch(next);
  });

// create a new comment
router.post('/articles/:article/comments', VerifyToken , function(req, res, next) {
	User.findById(req.userId).then(function(user){
	  if(!user){ return res.sendStatus(401); }
  
	  var comment = new Comment(req.body.comment);
	  comment.article = req.article;
	  comment.author = user;
  
	  return comment.save().then(function(){
		req.article.comments.push(comment);
  
		return req.article.save().then(function(article) {
		  res.json({comment: comment.toJSONFor(user)});
		});
	  });
	}).catch(next);
  });
module.exports = router
