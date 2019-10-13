<template>
  <Layout>
    <br />
    <g-link to="/" class="link">&larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
      <p class="post-date">{{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
    </div>
    <div class="post-content py-2" v-html="$page.post.content"></div>
  </Layout>
</template>

<s

<style lang="postcss" scoped>
.post-content >>> p {
  @apply py-2;
}

.post-content >>> img {
  width: "100%";
}

.post-content >>> a {
  @apply text-primary;
}

.post-content >>> ul {
  @apply list-disc;
}
</style>

<page-query>
query blogPost ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>
