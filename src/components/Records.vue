
<template>
  <div>
    <h1>Student Records</h1>
    <b-col lg="4" class="pb-2"><b-button size="lg" href="/Past Records" >Past Records</b-button></b-col>
  <p>
    <ul id="Student Records">
      <li>Current Classes:<li>
      <li v-for="record in records" v-bind:key="record.id">{{record.className + " - " + record.grade}} </li>
      <li>Overall GPA: {{gpa}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  data(){
    
    return {
      records:[
      {id: 0, className: "CS 101", grade: 96},
      {id: 1, className: "MATH 101", grade: 85},
      {id: 2, className: "COMM 101", grade: 85},
      {id: 3, className: "BIO 101", grade: 74}
    ],
      gpa: '3.47',
      
    }
  }
}
</script>