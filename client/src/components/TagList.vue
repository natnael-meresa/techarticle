<template>
  <ul class="tag-list">
    <li
      class="tag-default tag-pill tag-outline ng-binding ng-scope"
      v-for="(tag, index) of tags"
      :key="index"
    >
      <span v-text="tag" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TagList",
  props: {
    tags: Array
  }
};
</script>

<style scoped>
li{
  font-weight: 300;
    display: inline-block;
    list-style: none !important;
    padding-right: 0.6em;
    margin-top: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
    border: 1px solid #ddd;
    color: #aaa !important;
    background: none !important;
}
</style>