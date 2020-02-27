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
import axios from 'axios'
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
          axios({ method: "GET", "url": "http://localhost:8080/#/contacts" }).then(result => {
                this.text = result ;
          })},
      postData(sentData){
        axios({ method: "POST", "url": "http://localhost:8080/#/contacts", sentData})
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
  flex-grow: 1
}

</style>