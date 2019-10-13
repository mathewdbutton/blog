<template>
  <section class="posts">
    <template v-for="edge in $static.posts.edges">
      <PostItem :key="edge.node.id" :post="edge.node" />
      <hr :key="edge.node.id + 2" class="line" />
    </template>
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
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>
