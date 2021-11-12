<template>
    <div>
        <div class="container pt-4">
            <div class="create-article  container">
               <h1>Create Article</h1>
               <form @submit.prevent="createArticle" class="form-floating">
                   <div v-if="errors && errors.length">
                        <div class="alert alert-warning" role="alert" v-for="(error, index) in errors" v-bind:key='index'>
                            {{error}}
                        </div>
                   </div>
                   <div class="form-floating pb-2">
                        <input type="text" v-model="article.title" class="form-control" id="title" name="title" placeholder="title">
                        <label for="floatingInput">Title</label>
                    </div>
                     <div class="form-floating pb-2">
                         <input type="text" v-model="article.description"  class="form-control" id="description" name="description" placeholder="description">
                        <label for="floatingInput">Description</label>
                   </div>
                    <div class=" pb-2">
                       <textarea class="form-control" rows="8" v-model="article.body" placeholder="Write your article here">
                       </textarea>
                    
                    </div>
                  
                    <div class="form-floating pb-2">
                        <input type="text" v-model="article.tagList"  class="form-control" id="tagList" name="tagList" placeholder="tagList">
                        <label for="floatingInput">tagList</label>
                    </div>
                    <button  class="btn btn-lg pull-xs-right btn-primary" type="submit" >
                        Create Article
                    </button>
                    <!-- <button class="w-100 btn btn-lg btn-primary" type="submit" v-on:click="createArticle">Create Article</button> -->
               </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
     data(){
        return {
            article: {
                title:null,
                body:null,
                description:null,
                tagList:null,
            },
            repns: null,
            errors: []
        }
    },
        methods: {
        createArticle(){

            
            this.$store
                .dispatch("createArticle", {
                  title: this.article.title,
                  body: this.article.body,
                  description: this.article.description,
                  tagList: this.article.tagList,
                }).then(response => {
                    this.repns = response
                    console.log(`Response---${response}`)
                    this.$router.push({
                      name: 'Home'
                    })
                }).catch(err => {
                    console.log(`erros: - ${err}`)
                    this.errors = []
                    this.errors.push(err.response.data)
                })
            
            
        }
    }
}
</script>

<style scoped>
 .create-article{
    width:70%;
 }
 button{
  position: absolute;
  right: 0;

 }
</style>

