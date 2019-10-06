<template>
  <Layout>
    <header class="header">
      <p>My attempt to appear professional</p>
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
