<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>Title</h1>
        <h1 class="banner-h1"> {{article.title}}</h1>
          <div class="postUser">
            <div class="postUser__portrait">
              <span class="icon fa fa-user-circle-o"></span>
            </div>
            <div class="postUser__name">
              <router-link
                :to="{ name: 'profile', params: { username: article.author.username } }"
                class="author link-list"
              >
                {{ article.author.username }}
              </router-link>
            </div>

            <div class="btns" v-if="loggedIn">
              <a href="" class="btn btn-outline-primary btn-sm pr">Edit Article</a>
              <a href="" class="btn btn-outline-danger btn-sm">Delete Article</a>
            </div>
            <div class="btns" v-else>
              <a href="" class="btn btn-outline-primary btn-sm pr">Follow</a>
              <a href="" class="btn btn-outline-primary btn-sm">Favorite Article</a>
            </div>
          </div>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-xs-12">

          <div v-html="parseMarkdown(article.body)"></div>
          <ul class="tag-list">
            <li v-for="(tag, index) of article.tagList" :key="index">
              <Tag :name="tag" className="tag-default tag-pill tag-outline"></Tag>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="article-actions">
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <CommentEditor
            v-if="loggedIn"
            :slug="slug"
          >
          </CommentEditor>
          <p v-else>
            <router-link :to="{ name: 'login' }">Sign in</router-link>
            or
            <router-link :to="{ name: 'register' }">sign up</router-link>
            to add comments on this article.
          </p>
          <Comment
            v-for="(comment, index) in comments"
            :slug="slug"
            :comment="comment"
            :key="index"
          >
          </Comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import Comment from "@/components/Comment";
import CommentEditor from "@/components/CommentEditor";
import Tag from "@/components/Tag";
import { FETCH_ARTICLE, FETCH_COMMENTS } from "@/store/actions.type";

import { authComputed, username, Article, comments} from "../store/helpers.js"

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    Comment,
    CommentEditor,
    Tag
  },
   data() {
    return{
    }
  },
  created() {
    Promise.all([
      this.$store.dispatch(FETCH_ARTICLE, this.slug),
      this.$store.dispatch(FETCH_COMMENTS, this.slug)
    ]).then(() => {
    }).catch((err)=>{
      console.log(err)
    });
  },
 

  computed: {
    ...authComputed,
    ...username,
    ...Article,
    ...comments,
  },
  methods: {
    parseMarkdown(content) {
      return marked(content);
    }
  }
};
</script>

<style scoped>
  .banner{
    background-color: #333;
    color:white;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .banner-h1{
    font-size: 2.8rem;
    font-weight: 600;
  }
  .pr{
    margin-right: 5px;
  }

  .btns{
    margin-left: 50px;
  }

  .post{
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

}
.postUser {

  display: flex;
  margin-bottom: -10px;

}
    .postUser__portrait {

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 40px;
    font-size: 70px;
    line-height: 0;

    border: 1px solid #D7DBDD;
    font-size: 40px;
    border-radius: 100%;
    box-shadow:
      0 2px 1px rgba(0, 0, 0, 0.05),
      0 2px 3px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.05);
    }

    .postUser__name {
    padding-top: 20px;
    padding-left: 3px;
    color: #57727C;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
  }
  .title{
    margin-top: 0px;
    margin: 0px;
    flex: 1 1 0%;
    position: relative;
    padding: 15px;
  }
  .title-content {
     margin-top: 0px;
    color: #57727C;
  }

  .postBody__date {
    margin-top: 5px;
    color: #86969C;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .article-footer {
    display: flex;
    justify-content: space-between;
  }
  .readmore {
    display: flex;
    justify-content: space-between;
  }

  .link-list {
       text-decoration: none;
      
  }
    
</style>

