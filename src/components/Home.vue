<template>
<Calendar/>

</template>

<script>
import Calendar from './Calendar.vue'
export default {
  name: 'Home', //this is the name of the component,
  components: {
    'Calendar': Calendar
  }
}

</script>

<div align= "left"> //puts button on left
import Button from './Button.vue'
export default {
  name: 'Home', //this is the name of the component,
  components: {
    'Button': Button
  }
}
</div>

<style>
</style>