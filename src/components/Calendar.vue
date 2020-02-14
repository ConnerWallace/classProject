<template>
  <VueCal :time="false" hide-weekends :events=events />
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
        start: '2020-2-19 10:35',
        end: '2020-2-19 11:30',
        title: 'Doctor appointment'
      },
      {
        start: '2020-2-19 18:30',
        end: '2020-2-19 19:15',
        title: 'Dentist appointment'
      },
      {
        start: '2020-2-20 18:30',
        end: '2020-2-20 20:30',
        title: 'Crossfit'
      },
      {
        start: '2020-2-21 11:00',
        end: '2020-2-21 13:00',
        title: 'Brunch with Jane'
      },
      {
        start: '2020-2-21 19:30',
        end: '2020-2-21 23:00',
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