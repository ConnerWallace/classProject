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
export default {
  name: 'Dlinks', //this is the name of the component,
  components: {
    
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