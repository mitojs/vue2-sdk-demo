<template>
  <header class="topbar">
    <div class="breadcrumb">
      MitoJS<span>/</span><strong>Vue 2 演示</strong>
    </div>
    <div class="header-actions">
      <span class="framework-tag">Vue 2</span><a
        href="https://github.com/mitojs/vue2-sdk-demo"
        target="_blank"
        rel="noreferrer"
        class="github-link"
        aria-label="查看 GitHub 源码"
      ><Icon name="github" /><span>GitHub</span><Icon
        name="link"
        class="external-icon"
      /></a>
    </div>
  </header>
</template>
<script>
import Icon from './Icon.vue'
export default { name: 'DemoHeader', components: { Icon } }
</script>
