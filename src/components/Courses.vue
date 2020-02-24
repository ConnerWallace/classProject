<template>
  <div id="coursesContainer">
    <b-list-group horizontal>
      <b-list-group-item v-for="course in courses" v-bind:key="course.id">
      <b-card
        :title="course.title"
        :img-src="course.imgSrc"
        :img-alt="course.imgAlt"
        img-top
        :tag="course.tag"
        :class="course.class"
      >
        <b-card-text></b-card-text>

        <b-button href="#" variant="primary">Enter Class</b-button>
      </b-card>,
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
// In your Vue.js component.

//Classroom.jpeg <https://www.pexels.com/photo/abc-books-chalk-chalkboard-265076/>

export default {
  name: "Courses", //this is the name of the component,
  components: {},
  data: () => ({
    courses: [
      {
        id: 0,
        title: "./classroom.jpeg",
        imgSrc: "./classroom.jpeg",
        imgAlt: "Image",
        tag: "article",
        class: "coursesContainer"
      },
      {
        id: 1,
        imageLocation: "./classroom.jpeg",
        title: "./classroom.jpeg",
        imgSrc: "./classroom.jpeg",
        imgAlt: "Image",
        tag: "article",
        class: "coursesContainer"
      },
      {
        id: 2,
        imageLocation: "./classroom.jpeg",
        title: "./classroom.jpeg",
        imgSrc: "./classroom.jpeg",
        imgAlt: "Image",
        tag: "article",
        class: "coursesContainer"
      },
      {
        id: 3,
        title: "./classroom.jpeg",
        imgSrc: "./classroom.jpeg",
        imgAlt: "Image",
        tag: "article",
        class: "coursesContainer"
      }
    ]

  })
};
</script>
<style>
.coursesContainer {
  max-width: 20rem;
}
</style>