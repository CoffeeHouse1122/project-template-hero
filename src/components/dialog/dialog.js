export default {
  name: "dialogComponent",
  props: {
    // 接收弹窗类型
    dialogType: {
      value: ""
    },
    // 接收弹窗内容
    dialogData: {
      value: ""
    }
  },
  data() {
    return {
      maskShow: false, // 蒙版状态
      dialogCont: "" // 弹窗内容
    };
  },
  methods: {
    // 关闭弹窗
    closeDialog: function() {
      this.maskShow = false;
      this.$emit("closeDialog", "");
    }
  },
  watch: {
    // 监测弹窗类型变化
    dialogType: function(newVal, oldVal) {
      this.maskShow = newVal;
    },
    // 监测弹窗内容变化
    dialogData: function(newVal, oldVal) {
      this.dialogCont = newVal;
    }
  }
};