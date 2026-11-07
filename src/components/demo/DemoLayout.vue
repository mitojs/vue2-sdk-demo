<template>
  <div class="app-shell">
    <DemoSidebar :is-behavior="isBehavior" @navigate="$emit('navigate', $event)" />
    <div class="workspace">
      <DemoHeader />
      <main>
        <div class="page-heading">
          <div>
            <p class="eyebrow">
              OBSERVE. UNDERSTAND. IMPROVE.
            </p>
            <h1>Vue 2 SDK 演示</h1>
            <p class="page-description">
              从一次点击开始，体验前端监控的完整过程。
            </p>
          </div>
          <span
            class="ready-indicator"
          ><i></i>{{ state.ready ? '本地接收已就绪' : '本地接收未启动' }}</span>
        </div>
        <div class="info-banner">
          <Icon name="info" />
          <div>
            <strong>点击左侧场景，实时查看采集结果</strong>
            <p>
              异常会自动生成上报记录，日常操作会留在行为轨迹中。所有演示数据仅在当前浏览器内接收。
            </p>
          </div>
          <span class="banner-badge">实时采集</span>
        </div>
        <div class="section-intro">
          <div>
            <h2>{{ isBehavior ? '每一步操作，都有迹可循。' : '试着触发一个场景' }}</h2>
            <p>
              {{
                isBehavior
                  ? '还原异常发生前的点击、请求与页面跳转。'
                  : '选择一种异常，右侧即刻呈现完整上报。'
              }}
            </p>
          </div>
          <span
            class="section-count"
          >{{ state.reports.length }} 条上报<span>·</span>{{ state.breadcrumbs.length }} 个行为</span>
        </div>
        <div class="demo-grid">
          <slot />
        </div>
        <footer class="page-footer">
          <span>用更清晰的上下文，理解每一个前端问题。</span><a
            href="https://github.com/mitojs/mitojs"
            target="_blank"
            rel="noreferrer"
          >MitoJS 开源项目<Icon
            name="link"
          /></a>
        </footer>
      </main>
    </div>
  </div>
</template>
<script>
import DemoSidebar from './DemoSidebar.vue'
import DemoHeader from './DemoHeader.vue'
import Icon from './Icon.vue'
export default {
  name: 'DemoLayout',
  components: { DemoSidebar, DemoHeader, Icon },
  props: { isBehavior: Boolean, state: Object }
}
</script>
