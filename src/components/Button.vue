<template>
<div align = "Left">
   <b-col lg="4" class="pb-2"><b-button size="lg" href="#/courses">Current Courses</b-button></b-col>
   <b-col lg="4" class="pb-2"><b-button size="lg" href="#/Dlinks" >Direct Links</b-button></b-col>
   <b-col lg="4" class="pb-2"><b-button size="lg" href="#/records">Records</b-button></b-col>
   <b-col lg="4" class="pb-2"><b-button size="lg" href="#/contacts">Contacts</b-button></b-col>
</div>
</template>

<script>
export default {
  name: 'Button', //this is the name of the component,
  data() {
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
</style>