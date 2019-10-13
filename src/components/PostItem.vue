<template>
  <div class="post-list px-4 my-2">
    <p class="date" v-html="post.date" />
    <g-link :to="post.path" class="read">
      <h1 class="title text-2xl" v-html="post.title" />
    </g-link>
    <p class="description" v-html="post.description" />
    <strong class="text-accent-dark">{{post.timeToRead}} min read</strong>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>
