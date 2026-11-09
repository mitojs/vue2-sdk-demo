<template>
  <div>
    <div class="report-monitor__columns" aria-hidden="true">
      <span>类型</span><span>摘要 / 发生位置</span><span>来源 / 结果</span><span>时间</span>
    </div>
    <div
      class="report-monitor__list"
      aria-label="上报记录列表"
      data-testid="report-list"
    >
      <button
        v-for="report in reports"
        :key="report.id"
        type="button"
        class="report-monitor__row"
        :aria-pressed="report.id === selectedId"
        @click="$emit('select', report.id)"
      >
        <span class="report-monitor__type" :data-type="report.type" :data-error="String(report.isError)">{{ report.badge }}</span>
        <span
          class="report-monitor__summary"
        ><span class="report-monitor__title">{{ report.title }}</span><span class="report-monitor__location">{{ report.location }}</span></span>
        <span
          class="report-monitor__outcome"
        ><template
          v-if="report.type === 'HTTP'"
        ><span
          class="report-monitor__outcome-top"
        ><b class="report-monitor__status" :data-error="String(report.isError)">{{ report.status }}</b><span class="report-monitor__duration">{{ report.duration }}</span></span><span class="report-monitor__source-detail">{{ report.source }}</span></template><template
          v-else
        ><span class="report-monitor__source">{{ report.source }}</span><span class="report-monitor__source-detail">{{ report.sourceDetail }}</span></template></span>
        <time class="report-monitor__time">{{ report.time }}</time>
      </button>
    </div>
  </div>
</template>
<script>
export default { name: 'ReportTable', props: { reports: Array, selectedId: [Number, String] } }
</script>
