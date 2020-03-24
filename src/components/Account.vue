<template>
  <div>
    <ul>
      <font size="5">My Info:</font>
      <p>Display Name: {{myFirstName + ' ' + myLastName}}</p>
      <p>Email: {{myEmail}}</p>
      <p>Phone Number: {{myPhoneNumber}}</p>
    </ul>
    <edit-user-info-btn />
  </div>
</template>

<script>
import EditUserInfoBtn from "./EditUserInfoBtn.vue";

export default {
  name: "Account", //this is the name of the component,
  components: {
    EditUserInfoBtn: EditUserInfoBtn
  },
  data() {
    return {
      myFirstName: "John",
      myLastName: "Doe",
      myPhoneNumber: "555-5555",
      myEmail: "student@kettering.edu"
    };
  }
};
</script>


<style>
</style>