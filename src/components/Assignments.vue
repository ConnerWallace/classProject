<template>
  <VueCal :time="false" hide-weekends :events=events />
</template>

<script>
// In your Vue.js component.
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'Assignments', //this is the name of the component,
  components: { VueCal },
  data: () => ({
    events: [
      {
        start: '2020-2-19 ',
        end: '2020-2-19 ',
        title: 'Final Paper'
      }
    ]
  })
    }
</script>
<style>
</style>