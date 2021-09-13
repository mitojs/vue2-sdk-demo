<template lang="pug">
  .menuLayout--wrapp
    BaseSiderMenu.menuLayout--wrapp__sider
    .menuLayout--wrapp__router
        router-view.content
        div.iframe
          iframe.rf(ref="iframe" src="https://mitojs.github.io/mito-admin-demo/#/breadcrumbDemo")
</template>

<script>
import BaseSiderMenu from '../BaseSiderMenu'
export default {
  name: 'MenuLayout',
  components: {
    BaseSiderMenu
  },
  data() {
    return {}
  },
  mounted() {
    let iframe = this.$refs.iframe
    const breadcrumb = window._MITO_.breadcrumb
    let lastLength = -1
    setInterval(() => {
      const length = breadcrumb.getStack().length
      if (length === lastLength) {
        return
      } else {
        lastLength = length
        iframe.contentWindow &&
          iframe.contentWindow.postMessage(
            {
              type: 'breadcrumb',
              data: JSON.parse(JSON.stringify(breadcrumb.getStack()))
            },
            'https://mitojs.github.io/mito-admin-demo/#/breadcrumbDemo'
          )
      }
    }, 1000)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.menuLayout--wrapp {
  display: flex;
  width: 100%;
  height: 100%;
  &__sider {
    padding-top: 24px;
  }
  &__router {
    flex: 1;
    padding: 24px;
    display: flex;
    .content {
      flex: 1;
      background-color: white;
      width: 100%;
      height: 100%;
    }
    .iframe {
      flex: 1;
      .rf {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
