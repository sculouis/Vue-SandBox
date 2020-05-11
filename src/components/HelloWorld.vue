<template>
  <div class="hello">
    <input type="text" v-model="val">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return { val: "" };
  },
  mounted: function() {
    console.log(this.value);
    this.val = this.value;
  },
  updated: function() {
    this.$emit("input", this.val);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
