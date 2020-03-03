<template>
  <div>
      {{id}}
  </div>
</template>

<script>
// In your Vue.js component.

//Classroom.jpeg <https://www.pexels.com/photo/abc-books-chalk-chalkboard-265076/>

export default {
  
  name: "Courses", //this is the name of the component,
  components: {},
  props: ['id'],
  data () {
    return {
    }
  },
  mounted(){
    this.getCourse()
  },
  methods:{
    getCourse(){
        this.$http({ method: "GET", "url": "http://localhost:3000/course/"+this.id }).then(result => {
              console.log(result)
              this.courses = result.data ;
        })},
    updateCourse(sentData){
      this.$http({ method: "PUT", "url": "http://localhost:3000/courses/"+this.id, sentData})
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