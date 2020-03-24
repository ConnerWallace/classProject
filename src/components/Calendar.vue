<template>
  <VueCal :time-from="8 * 60" :time-to="19 * 60" :time-step="60" hide-weekends />
</template>

<script>
// In your Vue.js component.
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'Calendar', //this is the name of the component,
  components: { VueCal },
  data: () => ({
    events: [
      {
        start: '2020-3-19 10:35',
        end: '2020-3-19 11:30',
        title: 'Doctor appointment'
      },
      {
        start: '2020-3-19 18:30',
        end: '2020-3-19 19:15',
        title: 'Dentist appointment'
      },
      {
        start: '2020-3-20 18:30',
        end: '2020-3-20 20:30',
        title: 'Crossfit'
      },
      {
        start: '2020-3-21 11:00',
        end: '2020-3-21 13:00',
        title: 'Brunch with Jane'
      },
      {
        start: '2020-3-21 19:30',
        end: '2020-3-21 23:00',
        title: 'Swimming lesson'
      },
      {
        start: '2019-09-30 19:30',
        end: '2019-09-30 23:00',
        title: 'Swimming lesson'
      },
      {
        start: "2020-2-19 12:00",
        end: "2020-2-19 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true
      },
      {
        start: "2020-2-20 12:00",
        end: "2020-2-20 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true
      }
    ]
  })
    }
</script>
<style>
</style>