<template>
  <svg
    v-on:click="click"
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 220"
  >
    <circle cx="110" cy="110" r="82.1" fill="none" :class="formattedBandColour" stroke-width="38" />
    <!-- Top Left -->
    <rect width="44.3" height="44.3" x="63.5" y="65.2" :class="formattedHoleColours[0]" />
    <!-- Top Right -->
    <rect width="44.3" height="44.3" x="111.3" y="66.3" :class="formattedHoleColours[1]" />
    <!-- Bottom Right -->
    <rect width="44.3" height="44.3" x="111.6" y="115" :class="formattedHoleColours[2]" />
    <!-- Bottom Left -->
    <rect width="44.3" height="44.3" x="63.5" y="114" :class="formattedHoleColours[3]" />
    <path
      d="M110 35a75 75 0 100 150 75 75 0 000-150zM86 147a15 15 0 1115-15 15 15 0 01-15 15zm0-44a15 15 0 110-30 15 15 0 010 30zm48 44a15 15 0 110-30 15 15 0 010 30zm0-44a15 15 0 110-30 15 15 0 010 30z"
    />
    <path
      d="M110 220a110 110 0 110-220 110 110 0 010 220zm0-209a99 99 0 100 198 99 99 0 000-198zm0 179a80 80 0 110-160 80 80 0 010 160zm0-149a69 69 0 100 138 69 69 0 000-138z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    holeColours: Array,
    bandColour:  String,
    size: String,
    click: Function
  },
  computed: {
    formattedHoleColours() {
      return this.holeColours.map(colour => `fill-${colour}`);
    },
    formattedBandColour() {
      return `stroke-${this.bandColour}`;
    }
  }
};
</script>
