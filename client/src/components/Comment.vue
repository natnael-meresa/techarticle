<template>
    <div>
        {{slug}}
        {{comment}}
    </div>
</template>

<script>
export default {
props: {
    slug: {
      type: String,
      required: true
    },
    comment: {
        type: String,
    }
  },
}
</script>

<style>

</style>