<template>
    <div>
        <div class="container">
            <div class="create-article">
               <h1>Create Article</h1>
               <form action="#" class="form-floating">
                   <div class="form-floating">
                        <input type="text" v-model="article.slug" class="form-control" id="slug" name="slug" placeholder="slug">
                        <label for="floatingInput">Slug</label>
                   </div>
                   <div class="form-floating">
                        <input type="text" v-model="article.title" class="form-control" id="title" name="title" placeholder="title">
                        <label for="floatingInput">Title</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" v-model="article.body"  class="form-control" id="body" name="body" placeholder="body">
                        <label for="floatingInput">Body</label>
                    </div>
                   <div class="form-floating">
                         <input type="text" v-model="article.description"  class="form-control" id="description" name="description" placeholder="description">
                        <label for="floatingInput">Description</label>
                   </div>
                   <div class="form-floating">
                        <input type="text" v-model="article.author"  class="form-control" id="author" name="author" placeholder="author">
                        <label for="floatingInput">Author</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" v-model="article.tagList"  class="form-control" id="tagList" name="tagList" placeholder="tagList">
                        <label for="floatingInput">tagList</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" v-on:click="createArticle">Create Article</button>
               </form>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleService from '@/services/ArticleService'

export default {
     data(){
        return {
            article: {
                slug:undefined,
                title:'senay kray',
                body:null,
                description:null,
                author:null,
                tagList:null,
            },
            repns: null
        }
    },
        methods: {
        createArticle(){
            console.log(this.article)
            ArticleService.postArticles(this.article)
            .then(response => {
                this.repns = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>


