<template>
  <div id="app">
    <h1>hello world</h1>
    <div>{{ couter }}</div>
    <button @click="handeClick">click me</button>
    <div>{{ getCouter }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  computed: {
    ...mapState({
      couter: (state) => state.couter,
    }),
    ...mapGetters(["getCouter"]),
  },

  methods: {
    handeClick() {
      this.$store.dispatch("increte");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
