<template>
<div>
<Calendar/>
<Button/>
</div>
</template>

<script>
import Calendar from './Calendar.vue'
export default {
  name: 'Home', //this is the name of the component,
  components: {
    'Calendar': Calendar,
  }
}
import Button from './Button.vue'
export default {
  name: 'Home', //this is the name of the component,
  components: {
    'Button': Button,
  }
}
</script>


<style>
</style>