<template>
  <div role="tabpanel">
    <ol
      v-if="entries.length"
      class="report-monitor__timeline"
      data-testid="breadcrumb-list"
    >
      <li
        v-for="(entry, index) in entries"
        :key="index"
        class="report-monitor__timeline-entry"
      >
        <time>{{ entry.time }}</time><span class="report-monitor__timeline-mark" aria-hidden="true"></span>
        <div>
          <div class="report-monitor__timeline-title">
            {{ entry.title }}
          </div>
          <div class="report-monitor__timeline-detail">
            {{ entry.detail }}
          </div>
          <span
            class="report-monitor__timeline-category"
          >{{ entry.type }} · {{ entry.category }}</span>
        </div>
      </li>
    </ol>
    <p v-else class="report-monitor__empty">
      {{ isFiltered ? '没有匹配的轨迹' : '试着点击一个按钮，行为会出现在这里。' }}
    </p>
  </div>
</template>
<script>
export default { name: 'BreadcrumbTimeline', props: { entries: Array, isFiltered: Boolean } }
</script>
