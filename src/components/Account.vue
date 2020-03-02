<template>
<div>
    <ul>
        My Info
        <p>sername: {{myUserName}}</p>
        <p>display name: {{myFirstName + ' ' + myLastName}}</p>
        <p>phoneNumber: {{myPhoneNumber}}</p>
        <p>email: {{myEmail}}</p>
    </ul>
</div>
</template>

<script>
import EditUserInfoBtn from './EditUserInfoBtn.vue'

export default {
  name: 'Account', //this is the name of the component,
  components: {
  }
   ,data() {
    return {
      myUserName: "tomcruise7897",
      myFirstName: "Tom",
      myLastName: "Cruise",
      myPhoneNumber: "555-5555",
      myEmail: "tomcruise@email.com"  
      
    }
  }
}

</script>


<style>

</style>