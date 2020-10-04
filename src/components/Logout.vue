<template>
  <button type="button" class="btn btn-primary" @click="logout">{{ $t(getLabel('logout')) }}</button>
</template>

<script>
  import store from '../store'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.logout';

  export default {
    name: 'Logout',
    methods: {
      logout() {
        store.dispatch('logout');
        this.$router.push({ name: 'Home'})
      },
      getLabel(key) {
        return `${componentKey}.${key}`;
      }
    }
  }
</script>

<style>
 .btn {
    margin: 8px;
  }
</style>
