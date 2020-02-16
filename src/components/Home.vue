<template>
<div>
<Calendar/>
<Button/>
</div>
</template>

<script>
import Calendar from './Calendar.vue'
import Button from './Button.vue'
export default {
  name: 'Home', //this is the name of the component,
  components: {
    'Calendar': Calendar,
    'Button': Button,
  }
}

</script>


<style>
</style>