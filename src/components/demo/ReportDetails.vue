<template>
  <section
    class="report-monitor__details"
    aria-label="选中记录详情"
    aria-live="polite"
  >
    <div class="report-monitor__detail-heading">
      <div class="report-monitor__detail-title">
        <span class="report-monitor__eyebrow">选中记录</span><strong>{{ report.title }}</strong>
      </div>
      <span class="report-monitor__detail-status">本地接收成功 · HTTP 200</span>
    </div>
    <dl class="report-monitor__fields">
      <template
        v-for="(field, index) in report.fields"
      >
        <dt :key="'label-' + index">
          {{ field.label }}
        </dt>
        <dd :key="'value-' + index">
          {{ field.value }}
        </dd>
      </template>
    </dl>
    <details
      :key="report.id"
      class="report-monitor__json"
    >
      <summary>原始事件 JSON</summary>
      <pre data-testid="report-detail">{{ JSON.stringify(report.raw, null, 2) }}</pre>
    </details>
  </section>
</template>
<script>
export default { name: 'ReportDetails', props: { report: Object } }
</script>
