<template>
  <Button class="text-azure" @click="logout">{{ $t(getLabel('logout')) }}</Button>
</template>

<script>
  import store from '../store'
  import Button from './Button'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.logout';

  export default {
    name: 'Logout',
    components: {
      Button
    },
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
