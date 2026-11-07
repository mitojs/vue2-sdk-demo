<template>
  <section class="report-monitor" aria-label="采集结果">
    <div class="report-monitor__header">
      <div class="report-monitor__heading">
        <span class="report-monitor__live-icon"><Icon name="activity" /></span>
        <h3>实时观察窗</h3>
        <span class="report-monitor__live-label">LIVE</span>
      </div>
      <button class="report-monitor__clear" @click="clearRecords">
        <Icon name="trash" /><span>清空记录</span>
      </button>
    </div>
    <div
      class="report-monitor__tabs"
      role="tablist"
      aria-label="记录视图"
    >
      <button
        class="report-monitor__tab"
        role="tab"
        :aria-selected="activeTab === 'reports'"
        aria-controls="reports-panel"
        @click="switchTab('reports')"
      >
        上报记录<span>{{ state.reports.length }}</span>
      </button><button
        class="report-monitor__tab"
        role="tab"
        :aria-selected="activeTab === 'breadcrumbs'"
        aria-controls="breadcrumbs-panel"
        @click="switchTab('breadcrumbs')"
      >
        行为轨迹<span>{{ state.breadcrumbs.length }}</span>
      </button>
    </div>
    <div class="report-monitor__toolbar">
      <span class="report-monitor__context">{{
        activeTab === 'reports'
          ? filteredReports.length + ' 条记录 · 当前会话'
          : filteredCrumbs.length + ' 条轨迹 · 当前会话'
      }}</span><label
        class="report-monitor__search"
      ><Icon name="search" /><input
        v-model="query"
        type="search"
        :placeholder="activeTab === 'reports' ? '搜索摘要、状态、来源' : '搜索行为轨迹'"
        :aria-label="activeTab === 'reports' ? '搜索上报记录' : '搜索行为轨迹'"
      /></label>
    </div>
    <div
      v-if="activeTab === 'reports'"
      id="reports-panel"
      role="tabpanel"
    >
      <div v-if="!state.reports.length" class="report-monitor__empty">
        <span class="report-monitor__empty-icon"><Icon name="stack" /></span>
        <h4>还没有上报记录</h4>
        <p>触发左侧任意异常场景，<br />第一条记录就会出现在这里。</p>
        <span class="report-monitor__empty-hint">等待你的第一次触发</span>
      </div>
      <template
        v-else
      >
        <ReportTable
          :reports="filteredReports"
          :selected-id="selected && selected.id"
          @select="select"
        />
        <p v-if="!filteredReports.length" class="report-monitor__empty">
          没有匹配的记录
        </p>
        <ReportDetails
          v-if="selected"
          :report="selected"
        />
      </template>
    </div>
    <BreadcrumbTimeline
      v-else
      id="breadcrumbs-panel"
      :entries="filteredCrumbs"
      :is-filtered="!!query.trim()"
    />
    <div class="report-monitor__footer">
      <span>当前会话 · 最多保留 50 条</span><span>MitoJS × Vue 2</span>
    </div>
  </section>
</template>
<script>
import Icon from './Icon.vue'
import ReportTable from './ReportTable.vue'
import ReportDetails from './ReportDetails.vue'
import BreadcrumbTimeline from './BreadcrumbTimeline.vue'
import { normalizeReport, matchesReport, formatBreadcrumb } from '../../shared/report-model'
import { baseURL } from '../../localReceiver'
import { clearRecords as clearSessionRecords } from '../../monitoring'

export default {
  name: 'ReportMonitor',
  components: { Icon, ReportTable, ReportDetails, BreadcrumbTimeline },
  props: { state: Object, isBehavior: Boolean },
  data() {
    return { activeTab: this.isBehavior ? 'breadcrumbs' : 'reports', query: '' }
  },
  computed: {
    normalized() {
      return this.state.reports.map((record) =>
        normalizeReport(record, { basePath: baseURL.pathname })
      )
    },
    filteredReports() {
      return this.normalized.filter((record) => matchesReport(record, this.query))
    },
    selected() {
      return (
        this.filteredReports.find((record) => record.id === this.state.selectedId) ||
        this.filteredReports[0]
      )
    },
    filteredCrumbs() {
      const query = this.query.trim().toLowerCase()
      return this.state.breadcrumbs
        .slice()
        .reverse()
        .map((entry) => formatBreadcrumb(entry, { basePath: baseURL.pathname }))
        .filter((entry) =>
          [entry.type, entry.category, entry.title, entry.detail]
            .join(' ')
            .toLowerCase()
            .includes(query)
        )
    }
  },
  watch: {
    isBehavior(value) {
      this.activeTab = value ? 'breadcrumbs' : 'reports'
      this.query = ''
    }
  },
  methods: {
    clearRecords() {
      clearSessionRecords()
      this.query = ''
    },
    switchTab(tab) {
      this.activeTab = tab
      this.query = ''
    },
    select(id) {
      this.state.selectedId = id
    }
  }
}
</script>
