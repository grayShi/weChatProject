<template>
  <el-card>
    <slot></slot>
  </el-card>
</template>

<script>
    export default {
      name: "page-container",
      data () {
        return {

        };
      }
    };
</script>

<style scoped>
  .el-card {
    height: 97%;
    overflow: scroll;
    padding-bottom: 20px;
  }
</style>
