<template>
  <div class="dialog">
    <!-- 蒙版 -->
    <div class="dialog-mask" v-show="maskShow" v-cloak></div>
    <!-- 对话框-通用 -->
    <div class="dialog-common animated jackInTheBox faster " v-show="dialogType == 'common'" v-cloak>
      <span class="close" @click="closeDialog"></span>
      <p class="title">common</p>
      <p class="cont">{{dialogCont}}</p>
    </div>
    <!-- 对话框-登录 -->
    <div class="dialog-common animated jackInTheBox faster" v-show="dialogType == 'login'" v-cloak>
      <span class="close" @click="closeDialog"></span>
      login
    </div>
  </div>
</template>

<script src="./dialog.js"></script>

<style src="./dialog.css" scoped></style>
