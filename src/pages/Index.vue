<template>
  <Layout>
    <header class="header">
      <h1>Gridsome Blog</h1>
      <p>A simple blog designed with Gridsome</p>
    </header>
    <BlogPostList />
  </Layout>
</template>

<script>
import BlogPostList from "@/components/BlogPostList";
export default {
  components: {
    BlogPostList
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>
