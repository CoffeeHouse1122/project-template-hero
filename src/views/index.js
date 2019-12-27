import dialogComponent from "../components/dialog/dialog.vue";
import $axios from '../api/axios'
export default {
  components: {
    dialogComponent
  },
  data() {
    return {
      dialogType: "", // 弹窗类型
      dialogData: "", // 弹窗内容
    };
  },
  methods: {
    //显示弹窗
    showDialog: function(type, data) {
      this.dialogType = type;
      this.dialogData = data;
    },
    // 关闭弹窗
    closeDialog: function(value) {
      this.dialogType = value;
    },
    getUserInfo: async function () { // 获取用户信息
      let res = await $axios.post('/qzp/get-user-info.html')
      console.log(res)
    },
  },
  mounted() {
    this.getUserInfo()
  },
};