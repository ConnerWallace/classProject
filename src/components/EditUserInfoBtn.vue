<template>
<div align = "center">
   <b-col lg="4" class="pb-2"><b-button size="lg" href="#/EditUserInfoBtn">Edit personal info</b-button></b-col>

</div>
</template>

<script>
export default {
  name: 'EditUserInfoBtn', //this is the name of the component,
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Edit personal info',
          page:'/EnterInfo'
        }
      ]
    }
  }
}
</script>


<style>
</style>