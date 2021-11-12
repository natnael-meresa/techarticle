<template>
  <div>
    <form class="card comment-form" @submit.prevent="onSubmit(slug, comment)">
      <div class="card-block">
        <textarea
          class="form-control"
          v-model="comment"
          placeholder="Write a comment..."
          rows="3"
        >
        </textarea>
      </div>
      <div class="card-footer">
          <img src="../assets/avatar.jpg" alt="avatar"   class="comment-author-img">
        <button class="btn btn-sm btn-primary post-btn">Post Comment</button>
      </div>
    </form>
  </div>
</template>

<script>
import { COMMENT_CREATE } from "../store/actions.type.js";

export default {
  name: "CommentEditor",
  props: {
    slug: { type: String, required: true },
    content: { type: String, required: false },
    userImage: { type: String, required: false }
  },
  data() {
    return {
      comment: this.content || null,
      errors: {},
      url: '../assets/avatar1.jpg'
    };
  },
  methods: {
    onSubmit(slug, comment) {
      this.$store
        .dispatch(COMMENT_CREATE, { slug, comment })
        .then(() => {
          this.comment = null;
          this.errors = {};
        })
        .catch(({ response }) => {
          this.errors = response.data.errors;
        });
    }
  }
};
</script>

<style scoped>
    .comment-author-img{
        width: 60px;
        border-radius: 50%;
    }

    .card-footer{
        display: flex;
        justify-content: space-between;
    }

    .post-btn{
        height: 50px;
    }
</style>
