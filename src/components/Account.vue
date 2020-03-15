<template>
<div>
    <ul>
        My Info
        <p>Username: {{myUserName}}</p>
        <p>Display Name: {{myFirstName + ' ' + myLastName}}</p>
        <p>Phone Number: {{myPhoneNumber}}</p>
        <p>Email Address: {{myEmail}}</p>
    </ul>
    <edit-user-info-btn/>
</div>
</template>

<script>
import EditUserInfoBtn from './EditUserInfoBtn.vue'

export default {
  name: 'Account', //this is the name of the component,
  components: {
    EditUserInfoBtn: EditUserInfoBtn
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