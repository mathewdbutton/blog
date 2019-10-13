<template>
  <Layout>
    <header
      class="text-white border-solid rounded-lg shadow-xl text-center bg-shade-dark mb-4 pb-2"
    >
      <div class="p-4">
        <ButtonIcon
          :holeColours="holeColours"
          :bandColour="bandColour"
          size="100"
          class="fill-current inline"
          :click="shuffleColours"
        />
      </div>
      <h1 class="text-4xl">PushButton</h1>
      <h2>An attempt to appear professional</h2>
    </header>
    <BlogPostList />
  </Layout>
</template>

<script>
import BlogPostList from "@/components/BlogPostList";
import ButtonIcon from "@/components/ButtonIcon";
export default {
  components: {
    BlogPostList,
    ButtonIcon
  },
  data() {
    return {
      buttonHoleConstant: 4,
      colourChoices: ["primary", "accent-light", "accent-dark"],
      holeColours: [],
      bandColour: ""
    };
  },
  created: function() {
    this.shuffleColours();
  },
  methods: {
    chooseColour(choices) {
      const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };
      let index = getRandomInt(this.buttonHoleConstant) % choices.length;
      return choices[index];
    },
    shuffleColours() {
      this.holeColours = Array(this.buttonHoleConstant)
        .fill("")
        .map(value => {
          return this.chooseColour(this.colourChoices);
        });

      this.bandColour = this.chooseColour(this.colourChoices);
    }
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>
