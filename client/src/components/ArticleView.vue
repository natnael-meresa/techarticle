<template>
<div>

<div class="post pt-3">
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
      </router-link></div>
  </div>
  <div class="title">
    <router-link :to="{ name: 'article-show', params: {slug: article.slug } }" class="preview-link">
      <div class="title-content">
        <h3>{{ article.title }}</h3>
      <p>{{article.description}}</p>
      </div>
    </router-link>
    
    <div class="article-footer">
      <div class="postBody__date">
        <span class="date">{{ article.createdAt }}</span>
      </div>
      <div>
        <article-actions
      v-if="actions"
      :article="article"
      :canModify="isCurrentUser()"
    ></article-actions>
        <button
      v-else
      class="btn btn-sm pull-xs-right"
      @click="toggleFavorite"
      :class="{
        'btn-primary': article.favorited,
        'btn-outline-primary': !article.favorited
      }"
    >
      <i class="fas fa-heart"> </i>
      <span class="counter">{{ article.favoritesCount }} </span>
    </button>
      </div>
      
    </div>
    <div class="readmore">
           <div>Read more...</div>
           <div><TagList :tags="article.tagList" /></div>
           
        </div>
  </div>
</div>
</div>

</template>

<script>
// import ArticleMeta from "./ArticleMeta";
import TagList from "./TagList";
import { authComputed, Article} from "../store/helpers.js"
import { FAVORITE_ADD, FAVORITE_REMOVE } from "@/store/actions.type";
export default {
  name: "ArticlePreview",
  components: {
    // ArticleMeta,
    TagList
  },
  props: {
    article: { type: Object, required: true }
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.slug
        }
      };
    },
        ...authComputed,
    ...Article
  },



    methods: {
    toggleFavorite() {
      if (!this.loggedIn) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD;
      this.$store.dispatch(action, this.article.slug);
    }
  }
};
</script>

<style scoped>
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
