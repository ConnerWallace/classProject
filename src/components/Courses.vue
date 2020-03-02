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
        </b-card>
      </b-list-group-item>
    </b-list-group>
    <div id=buttonContainer>
      <div>
        <b-col lg="4" class="pb-2"><b-button size="lg" href="#/InfoAdder">Add Course</b-button></b-col>
      </div>  
    </div>
  </div>

</template>

<script>
// In your Vue.js component.

//Classroom.jpeg <https://www.pexels.com/photo/abc-books-chalk-chalkboard-265076/>

export default {
  
  name: "Courses", //this is the name of the component,
  components: {},
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Add Course',
          page:'/InfoAdder'
        }
      ],
      courses: [
        {
          id: 0,
          title: "COMM 101",
          imgSrc: "./classroom.jpeg",
          imgAlt: "Image",
          tag: "article",
          class: "coursesContainer"
        },
        {
          id: 1,
          title: "CS 101",
          imgSrc: "./classroom.jpeg",
          imgAlt: "Image",
          tag: "article",
          class: "coursesContainer"
        },
        {
          id: 2,
          title: "MATH 101",
          imgSrc: "./classroom.jpeg",
          imgAlt: "Image",
          tag: "article",
          class: "coursesContainer"
        },
        {
          id: 3,
          title: "BIO 101",
          imgSrc: "./classroom.jpeg",
          imgAlt: "Image",
          tag: "article",
          class: "coursesContainer"
        }
      ]
    
    }
  },
  mounted(){
    this.getCourses()
  },
  methods:{
    getCourses(){
        this.$http({ method: "GET", "url": "http://localhost:3000/courses" }).then(result => {
              console.log(result)
              this.courses = result.data ;
        })},
    postCourses(sentData){
      this.$http({ method: "POST", "url": "http://localhost:3000/courses", sentData})
    },
  }
};
</script>
<style>
.coursesContainer {
  max-width: 20rem;
}
#buttonContainer {
  display: flex;
  flex-direction: row;
}
</style>