<template>
  <DemoLayout
    :is-behavior="isBehavior"
    :state="state"
    @navigate="navigate"
  >
    <ScenarioControls
      :is-behavior="isBehavior"
      :state="state"
      @navigate="navigate"
    />
    <ReportMonitor :state="state" :is-behavior="isBehavior" />
  </DemoLayout>
</template>
<script>
import DemoLayout from './components/demo/DemoLayout.vue'
import ScenarioControls from './components/demo/ScenarioControls.vue'
import ReportMonitor from './components/demo/ReportMonitor.vue'
import { state } from './state'
export default {
  name: 'App',
  components: { DemoLayout, ScenarioControls, ReportMonitor },
  data: () => ({ state }),
  computed: {
    isBehavior() {
      return this.$route.path === '/behavior'
    }
  },
  methods: {
    navigate(destination) {
      const path = destination === 'behavior' ? '/behavior' : '/scenarios'
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>
