<template>
  <div class="container" id="app">
    <div class="panel panel-info" v-cloak>
      <div class="panel-heading data">基本表單控制項</div>
      <div class="panel-body" v-show="showPanel">
        <input-text title-name="主題" v-model="Subject"></input-text>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "./components/InputText";
export default {
  name: "App",
  components: { InputText },
  data() {
    return { Subject: "", showPanel: true };
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
