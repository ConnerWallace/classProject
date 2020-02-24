
<template>
  <div>
    <h1>Student Records</h1>
    <b-col lg="4" class="pb-2"><b-button size="lg" href="/Past Records" >Records</b-button></b-col>
  <p>
    <ul>
      <li>Curent Grades: {{grades}}</li>
      <li>Overall GPA: {{gpa}}</li>
      <li>Past Records: {{pastRecords}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data(){
    return {
      grades: 'Class 1 - A Class 2 - B',
      gpa: 'Overall GPA: 3.47',
      
    }
  }
}
</script>