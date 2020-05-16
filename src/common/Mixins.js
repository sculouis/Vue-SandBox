import _ from "lodash";

// 共用模組
let commonMixin = {
  created: function() {
    this.myid = this.uuid();
  },
  data: function() {
    return {
      val: "",
      showRequired: false,
      showDisabled: false,
      classStyle: "col-lg-3 col-md-6 col-sm-6 col-xs-12 input-group"
    };
  },
  methods: {
    //產生uuid
    uuid: function() {
      var seed = Date.now();
      if (window.performance && typeof window.performance.now === "function") {
        seed += performance.now();
      }

      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (seed + Math.random() * 16) % 16 | 0;
          seed = Math.floor(seed / 16);

          return (c === "x" ? r : r & (0x3 | 0x8)).toString(16);
        }
      );

      return uuid;
    }
  },
  mounted: function() {
    this.val = this.value;
    this.showRequired = _.isUndefined(this.required) ? false : true;
    //this.setDisabled = _.isUndefined(this.disabled) ? false : this.disabled
    if (_.isUndefined(this.maxlength) === false) {
      this.length = this.maxlength;
    }
    if (_.isUndefined(this.classEnum) === false) {
      this.classStyle = this.classEnum;
    }
  },
  computed: {
    setDisabled: function() {
      return this.actionState !== 1;
    }
  }
};

export { commonMixin };
