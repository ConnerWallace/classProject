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
   ,data() {
    return {
      links: [
        {
          id: 0,
          text: 'Current Courses',
          page:'/CurrentCourses'
        },
        {
          id: 1,
          text: 'Direct Links',
          page:'/DirectLinks'
        },
        {
          id: 2,
          text: 'Records',
          page:'/Records'
        },
        {
          id: 3,
          text: 'Contacts',
          page:'/Contacts'
        }
      ]
    }
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