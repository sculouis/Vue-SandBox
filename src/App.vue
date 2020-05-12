<template>
  <div id="app">
    <hello-world v-model="Subject"></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: { HelloWorld },
  data() {
    return { Subject: "" };
  },
  watch: {
    Subject: function() {
      console.log(this.Subject);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
