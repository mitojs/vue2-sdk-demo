<template>
  <section class="controls-column" aria-label="场景操作">
    <article class="card counter-card">
      <div class="card-label">
        <Icon name="activity" /><span>交互计数器</span><span class="tiny-tag">DOM</span>
      </div>
      <div class="counter-controls">
        <div>
          <strong data-testid="counter">{{ state.count }}</strong><span>次交互计数</span>
        </div>
        <div class="counter-buttons">
          <button
            class="square-button"
            aria-label="减少计数"
            @click="changeCount(-1)"
          >
            <Icon name="minus" />
          </button><button
            class="square-button"
            aria-label="增加计数"
            @click="changeCount(1)"
          >
            <Icon name="plus" />
          </button>
        </div>
      </div>
      <p class="muted">
        点击按钮，查看行为轨迹中的变化。
      </p>
    </article>
    <article v-if="!isBehavior" class="card scenario-card">
      <div class="card-heading">
        <h3>异常与上报</h3>
        <span class="tiny-tag">4 个场景</span>
      </div>
      <p class="card-description">
        让问题主动出现，看看它的来龙去脉。
      </p>
      <div class="scenario-list">
        <button
          class="scenario-button primary-scenario"
          aria-label="手动上报"
          @click="manualReport"
        >
          <Icon name="send" /><span>手动上报</span><span class="scenario-pill">LOG</span>
        </button><VueErrorDemo @trigger="state.notice = 'Vue 组件错误已触发。'" /><button
          class="scenario-button"
          @click="promiseError"
        >
          <Icon name="promise" /><span>Promise 异常</span><Icon name="arrow" class="trailing" />
        </button><button class="scenario-button" @click="codeError">
          <Icon name="bug" /><span>JavaScript 异常</span><Icon name="arrow" class="trailing" />
        </button>
      </div>
      <p v-if="vueErrorCollected" class="inline-feedback">
        <Icon name="check" />组件错误已采集，页面可以继续操作。
      </p>
    </article>
    <article v-if="!isBehavior" class="card request-card">
      <div class="card-heading">
        <h3>网络请求</h3>
        <Icon name="request" class="subtle-icon" />
      </div>
      <p class="card-description">
        对比正常响应与 HTTP 500 异常。
      </p>
      <div class="request-grid">
        <button class="outline-button" @click="fetchRequest(false)">
          <span class="button-dot success"></span>正常 Fetch
        </button><button class="outline-button danger-button" @click="fetchRequest(true)">
          <span class="button-dot danger"></span>异常 Fetch
        </button><button class="outline-button" @click="xhrRequest(false)">
          <span class="button-dot success"></span>正常 XHR
        </button><button class="outline-button danger-button" @click="xhrRequest(true)">
          <span class="button-dot danger"></span>异常 XHR
        </button>
      </div>
    </article>
    <article v-if="isBehavior" class="card behavior-guide">
      <div class="guide-icon">
        <Icon name="stack" />
      </div>
      <h3>把操作连成线</h3>
      <p>点击计数器、切换页面，或回到异常演示发起请求。右侧会按时间展示 SDK 收集的行为。</p>
      <div class="guide-types">
        <span>点击</span><span>路由</span><span>请求</span><span>异常</span>
      </div>
      <button class="outline-button full-width" @click="$emit('navigate', 'scenarios')">
        返回异常演示<Icon name="arrow" />
      </button>
    </article>
    <p class="operation-notice" role="status">
      <Icon name="check" /><span>{{ state.notice }}</span>
    </p>
  </section>
</template>
<script>
import Icon from './Icon.vue'
import VueErrorDemo from './VueErrorDemo.vue'
import {
  manualReport,
  promiseError,
  codeError,
  fetchRequest,
  xhrRequest,
  changeCount
} from '../../monitoring'
export default {
  name: 'ScenarioControls',
  components: { Icon, VueErrorDemo },
  props: { state: Object, isBehavior: Boolean },
  computed: {
    vueErrorCollected() {
      return this.state.reports.some((record) => record.payload.data.type === 'VUE')
    }
  },
  methods: { manualReport, promiseError, codeError, fetchRequest, xhrRequest, changeCount }
}
</script>
