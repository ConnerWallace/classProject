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

</script>


<style>
</style>