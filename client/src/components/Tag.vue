<template>
<div>
  <router-link :to="{ name: 'home-tag', params: { tag: name }}">{{name}}</router-link>

</div>
  
</template>

<script>
export default {
  name: "Tag",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: "tag-pill tag-default"
    }
  },
  computed: {
    homeRoute: () => ({ name: "", params: { tag: this.name } })
  }
};
</script>
