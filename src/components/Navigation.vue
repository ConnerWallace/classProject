<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="/">BetterBoard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/home">Home</b-nav-item>
        <b-nav-item href="#/courses">Courses</b-nav-item>
        <b-nav-item href="#/dlinks">Links</b-nav-item>
        <b-nav-item href="#/records">Records</b-nav-item>
        <b-nav-item href="#/contacts">Contacts</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Language" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          
            <b-dropdown-item href="#/account" v-if="isLoggedIn">Profile</b-dropdown-item>
            <b-dropdown-item v-on:click="logout" v-if="isLoggedIn">Sign Out</b-dropdown-item>
            <b-dropdown-item href="#/login" v-if="!isLoggedIn">Login</b-dropdown-item>
            
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Hello World',
          page:'/HelloWorld'
        },
        {
          id: 1,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 2,
          text: 'About',
          page:'/About'
        },
        {
          id: 3,
          text: 'Records',
          page:'/Records'
        },
        {
          id: 4,
          text: 'Contacts',
          page:'/Contacts'
        },
        {
          id: 5,
          text: 'InfoAdder',
          page:'/InfoAdder'
        }
      ]
    }
  },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  },
}
</script>
<style>

</style>
