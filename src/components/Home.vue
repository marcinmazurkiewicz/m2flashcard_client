<template>
  <div class="wrapper">
    Welcome to m2flashcards!
  </div>
</template>

<script>
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.home';

  export default {
    name: 'Home',
    data() {
      return {
      
      };
    },
    methods: {
      getErrorMsg(errorType) {
        return componentKey + '.' + errorType;
      }
    }
  }
</script>

