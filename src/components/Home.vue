<template>
  <div class="form-wrapper">
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

<style>
  .form-wrapper {
    padding-top: 24px;
    grid-area: 2 / 2 / 5 / 5;
  }
</style>
