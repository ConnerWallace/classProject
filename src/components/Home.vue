<template>
<div id=homeContainer>
  <div>
  <Button/>
  </div>
  <div id=rightContainer>
    <Calendar/>
    <Assignments/>
  </div>
  
</div>
</template>

<script>
import Calendar from './Calendar.vue'
import Assignments from './Assignments.vue'
import Button from './Button.vue'
export default {
  name: 'Home', //this is the name of the component,
  components: {
    'Calendar': Calendar,
    'Assignments': Assignments,
    'Button': Button,
    
  },
  data() {
    return {
        text: ""
      }
    },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
        this.$http({ method: "GET", "url": "http://localhost:3000/contacts" }).then(result => {
              this.text = result.data ;
        })},
    postData(sentData){
      this.$http({ method: "POST", "url": "http://localhost:8080/#/contacts", sentData})
    },
  }
}

</script>


<style>
#homeContainer {
  display: flex;
  flex-direction: row;
}

#rightContainer {
  height: 600px;
}

</style>