<template>
  <div id="homeContainer">
    <b-list-group horizontal>
      <b-card
        title="CS 101"
        img-src="./classroom.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text></b-card-text>

        <b-button href="#" variant="primary">Enter Class</b-button>
      </b-card>,
      <b-card
        title="MATH 101"
        img-src="./classroom.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text></b-card-text>

        <b-button href="#" variant="primary">Enter Class</b-button>
      </b-card>,
      <b-card
        title="COMM 101"
        img-src="./classroom.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text></b-card-text>

        <b-button href="#" variant="primary">Enter Class</b-button>
      </b-card>,
      <b-card
        title="BIO 101"
        img-src="./classroom.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text></b-card-text>

        <b-button href="#" variant="primary">Enter Class</b-button>
      </b-card>
,
    </b-list-group>
  </div>
</template>

<script>
// In your Vue.js component.

//Classroom.jpeg <https://www.pexels.com/photo/abc-books-chalk-chalkboard-265076/>


export default {
  name: "Courses", //this is the name of the component,
  components: {},
  data: () => ({})
};
</script>
<style>
</style>