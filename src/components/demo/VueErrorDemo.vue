<template>
  <button class="scenario-button" @click="triggerError">
    <Icon name="vue" /><span>Vue 组件错误</span><Icon name="arrow" class="trailing" />
  </button>
</template>
<script>
import Icon from './Icon.vue'
export default {
  name: 'VueErrorDemo',
  components: { Icon },
  methods: {
    triggerError() {
      this.$emit('trigger')
      throw new Error('Vue 组件演示错误')
    }
  }
}
</script>
