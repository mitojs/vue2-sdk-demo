<template lang="pug">
  .logo
    div.title mitojs-vue2.6-demo
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  width: 216px;
  line-height: 56px;
  background-color: #409eff;
  justify-content: center;
  .title {
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
