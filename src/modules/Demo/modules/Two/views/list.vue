<template lang="pug">
  .two
    el-button(@click="$router.push({name: 'one'})") 跳转到示例页面1
</template>

<script>
export default {
  name: 'TwoList',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.two {
  padding: 20px;
}
</style>
