
<template>
  <div>
    <h1>Student Records</h1>
    <b-table hover :items="items"></b-table>
    <b-col lg="4" class="pb-2"><b-button size="lg" href="/Past Records" >Past Records</b-button></b-col>
    <li>Overall GPA: {{gpa}}</li>
  </div>
</template>

<script>
export default {
  data(){ 
    return {
      items:[
      {id: 0, className: "CS 101", grade: 96},
      {id: 1, className: "MATH 101", grade: 85, _rowVariant: 'warning'},
      {id: 2, className: "COMM 101", grade: 85, _rowVariant: 'warning'},
      {id: 3, className: "BIO 101", grade: 64, _rowVariant: 'danger'}
    ],
      gpa: '3.47',
      
    }
  }
}
</script>



