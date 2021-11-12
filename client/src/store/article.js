import {
    TagsService,
    ArticlesService,
    CommentsService,
    FavoriteService
  } from "@/services/apiService";
import {
    FETCH_ARTICLE,
    FETCH_COMMENTS,
    COMMENT_CREATE,
    COMMENT_DESTROY,
    FAVORITE_ADD,
    FAVORITE_REMOVE,
    ARTICLE_PUBLISH,
    ARTICLE_EDIT,
    ARTICLE_EDIT_ADD_TAG,
    ARTICLE_EDIT_REMOVE_TAG,
    ARTICLE_DELETE,
    ARTICLE_RESET_STATE,
    FETCH_ARTICLES, 
    FETCH_TAGS,
  } from "./actions.type";
  import {
    RESET_STATE,
    SET_ARTICLE,
    SET_COMMENTS,
    TAG_ADD,
    TAG_REMOVE,
    UPDATE_ARTICLE_IN_LIST,
    FETCH_START,
    FETCH_END,
    SET_TAGS,
  }from "./mutations.type";

export const moduleB = {
    state: () => ({ 
        article: {
            author: {},
            title: "",
            description: "",
            body: "",
            tagList: []
        },
        tags: [],
        articles: [],
        isLoading: true,
        articlesCount: 0,
        comments: []
    }),
    actions: {
        async [FETCH_ARTICLE](context, articleSlug, prevArticle) {
            // avoid extronuous network call if article exists
            if (prevArticle !== undefined) {
              return context.commit(SET_ARTICLE, prevArticle);
            }

            //get the article here
            const { data } = await ArticlesService.get(articleSlug);
            context.commit(SET_ARTICLE, data.article);
            console.dir(data)
            console.log(`data:--- ${data.article.title}`)
            return data;
          },
        async [FETCH_COMMENTS](context, articleSlug) {
            const { data } = await CommentsService.get(articleSlug);
            context.commit(SET_COMMENTS, data.comments);
            return data.comments;
        },
        async [COMMENT_CREATE](context, payload) {
            await CommentsService.post(payload.slug, payload.comment);
            context.dispatch(FETCH_COMMENTS, payload.slug);
        },
        async [COMMENT_DESTROY](context, payload) {
            await CommentsService.destroy(payload.slug, payload.commentId);
            context.dispatch(FETCH_COMMENTS, payload.slug);
        },
        async [FAVORITE_ADD](context, slug) {
            const { data } = await FavoriteService.add(slug);
            context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
            context.commit(SET_ARTICLE, data.article);
        },
        async [FAVORITE_REMOVE](context, slug) {
            const { data } = await FavoriteService.remove(slug);
            // Update list as well. This allows us to favorite an article in the Home view.
            context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
            context.commit(SET_ARTICLE, data.article);
        },
        [ARTICLE_PUBLISH]({ state }) {
            return ArticlesService.create(state.article);
        },
        [ARTICLE_DELETE](context, slug) {
            return ArticlesService.destroy(slug);
        },
        [ARTICLE_EDIT]({ state }) {
            return ArticlesService.update(state.article.slug, state.article);
        },
        [ARTICLE_EDIT_ADD_TAG](context, tag) {
            context.commit(TAG_ADD, tag);
        },
        [ARTICLE_EDIT_REMOVE_TAG](context, tag) {
            context.commit(TAG_REMOVE, tag);
        },
        [ARTICLE_RESET_STATE]({ commit }) {
            commit(RESET_STATE);
        },
        [FETCH_ARTICLES]({ commit }, params) {
            commit(FETCH_START);
            if (params.filters.author) {
              return ArticlesService.query(params.type, params.filters)
              .then(({ data }) => {
                commit(FETCH_END, data);
              })
              .catch(error => {
                throw new Error(error);
              });
            }
            if (params.filters.tag) {
              return ArticlesService.query(params.type, params.filters)
              .then(({ data }) => {
                commit(FETCH_END, data);
              })
              .catch(error => {
                throw new Error(error);
              });
            }
            if (params.filters.favorited) {
              return ArticlesService.queryByfavorited(params.type, params.filters)
              .then(({ data }) => {
                commit(FETCH_END, data);
              })
              .catch(error => {
                throw new Error(error);
              });
            }
            return ArticlesService.query(params.type, params.filters)
              .then(({ data }) => {
                commit(FETCH_END, data);
              })
              .catch(error => {
                throw new Error(error);
              });
          },
          [FETCH_TAGS]({ commit }) {
            return TagsService.get()
              .then(({ data }) => {
                commit(SET_TAGS, data.tags);
              })
              .catch(error => {
                throw new Error(error);
              });
          }
      },
      mutations: { 
        [SET_ARTICLE](state, article) {
            state.article = article;
        },
        [SET_COMMENTS](state, comments) {
            state.comments = comments;
        },
        [TAG_ADD](state, tag) {
            state.article.tagList = state.article.tagList.concat([tag]);
        },
        [TAG_REMOVE](state, tag) {
            state.article.tagList = state.article.tagList.filter(t => t !== tag);
        },
        [RESET_STATE](state) {
        for (let f in state) {
           f.article = null
        }
        },
        [FETCH_START](state) {
            state.isLoading = true;
        },
        [FETCH_END](state, { articles, articlesCount }) {
          state.articles = articles;
          state.articlesCount = articlesCount;
          state.isLoading = false;
        },
        [SET_TAGS](state, tags) {
          state.tags = tags;
        },
        [UPDATE_ARTICLE_IN_LIST](state, data) {
          state.articles = state.articles.map(article => {
            if (article.slug !== data.slug) {
              return article;
            }
            // We could just return data, but it seems dangerous to
            // mix the results of different api calls, so we
            // protect ourselves by copying the information.
            article.favorited = data.favorited;
            article.favoritesCount = data.favoritesCount;
            return article;
          });
        }
       },
      getters: {
        article(state) {
          return state.article;
        },
        comments(state) {
          return state.comments;
        },
        articlesCount(state) {
            return state.articlesCount;
          },
          articles(state) {
            return state.articles;
          },
          isLoading(state) {
            return state.isLoading;
          },
          tags(state) {
            return state.tags;
          }
      },
}
