<template>
<div id=dLinksContainer>
  <div>
  <user-links/>
  </div>
  
  
</div>
</template>

<script>
import UserLinks from './UserLinks.vue'
export default {
  name: 'Dlinks', //this is the name of the component,
  components: {
    'UserLinks': UserLinks,
  }
}

</script>


<style>
#dLinksContainer {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
}

</style>