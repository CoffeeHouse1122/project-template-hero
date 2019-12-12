<template>
  <div class="wrap">
    <dialogComponent
      :dialog-type="dialogType"
      :dialog-data="dialogData"
      @closeDialog="closeDialog($event)"
    ></dialogComponent>
    {{ docTitle }}
    <button class="dialogBtn" @click="showDialog('common', [1,2,3,4,5,6,7])">弹出</button>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.css" scoped></style>

