<template>
  <section class="posts">
    <Post v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node" />
  </section>
</template>

<static-query>
query {
  posts: allBlogPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</static-query>

<script>
import Post from "@/components/Post";
export default {
  components: {
    Post
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>
