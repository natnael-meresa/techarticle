<template>
  <div class="home">
    <div v-if="!loggedIn"  class="heads  main-page p-4 p-md-5 mb-4 text-white" id="heads">
      <div class="col-md-6 px-0 mx-auto" >
        <router-link to="/articles">Create Article</router-link>
        <router-link class="nav-link" active-class="active" exact to="/articles" >
                    creates
        </router-link>
        <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div>
     <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="loggedIn" class="nav-item">
                <router-link
                  :to="{ name: 'home-my-feed' }"
                  class="nav-link"
                  active-class="active"
                >
                  Your Feed
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'Home' }"
                  exact
                  class="nav-link"
                  active-class="active"
                >
                  Global Feed
                </router-link>
              </li>
              <li class="nav-item" v-if="tag">
                <router-link
                  :to="{ name: 'home-tag', params: { tag } }"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="ion-pound"></i> {{ tag }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <Tag v-for="(tag, index) in tags" :name="tag" :key="index">
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>   

  </div>
</template>

<script>
// @ is an alias to /src


import { authComputed, Article, articlesCount, articles, isLoading, tags} from "../store/helpers.js"
// import { FETCH_ARTICLE } from "../store/actions.type";
import Tag from "@/components/Tag";
import { FETCH_TAGS } from "@/store/actions.type";
export default {
  name: 'Home',

   computed: {
    ...authComputed, ...Article, ...articlesCount, ...articles, ...isLoading, ...tags
  },
   mounted() {
    this.$store.dispatch(FETCH_TAGS);
  },
  components : {
    Tag,
  },
  // created() {
  //   this.$store.dispatch(FETCH_ARTICLE, 'best-title-6tq2c2' );
  //   this.$store
  //       .dispatch("fetchArticles", {
  //         articleSlug: 'best-title-6tq2c2',
  //       })
  // },
}
</script>

<style scoped>

  .heads{
    /* background: #33B5CC; */
    background: #0B4C58;
  }
  .main-page{
    background: url('../assets/home.jpg') no-repeat;
    background-size: 100%;
  }
</style>

