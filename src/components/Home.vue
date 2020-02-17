<template>
<div id=homeContainer>
  <div>
  <Button/>
  </div>
  <div id=rightContainer>
    <Calendar/>
    <Assignments/>

  </div>
  
</div>
</template>

<script>
import Calendar from './Calendar.vue'
import Assignments from './Assignments.vue'
import Button from './Button.vue'
export default {
  name: 'Home', //this is the name of the component,
  components: {
    'Calendar': Calendar,
    'Assignments': Assignments,
    'Button': Button,
  }
}

</script>


<style>
#homeContainer {
  display: flex;
  flex-direction: row;
}

#rightContainer {
  flex-grow: 1
}

</style>