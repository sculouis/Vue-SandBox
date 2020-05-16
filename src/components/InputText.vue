<!--文字輸入框-->
<template id="inputTextTemplate">
  <div v-bind:class="classStyle" v-cloak>
    <span class="input-group-addon">
      <span style="color: red;" cltctype="P" v-show="showRequired">＊</span>
      {{titleName}}
    </span>
    <input
      type="text"
      class="form-control upperCase"
      v-model.lazy="val"
      v-bind:placeholder="placeholder"
      v-bind:maxlength="length"
      v-bind:disabled="disabled"
    >
  </div>
</template>

<script>
import {commonMixin} from "../common/Mixins";
export default {
  name: "InputText",
  mixins: [commonMixin],
  props: [
    "titleName",
    "classEnum",
    "value",
    "placeholder",
    "required",
    "disabled",
    "maxlength"
  ],
  data: function() {
    return {
      length: 50
    };
  },
  updated: function() {
    this.$emit("input", this.val); //reflect to parent dataModel
  }
};
</script>
