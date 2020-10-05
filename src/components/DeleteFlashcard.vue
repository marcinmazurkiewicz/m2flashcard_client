<template>
  <button type="button" class="btn btn-danger" @click="remove"> Usuń </button>
</template>

<script>
  import store from '../store'
  import axios from 'axios'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.deleteflashcard';

  export default {
    name: 'DeleteFlashcard',
    props: ['flashcardId'],
    methods: {
      remove() {
       axios.delete(`http://localhost:8080/api/v1/flashcards/${this.flashcardId}/`, {
        headers: {
          'Authorization': store.getters.getToken
        }
      }).then(() => this.$emit('flashcardRemoved', this.flashcardId))
      .catch((e) => {
         console.log(e);
        });
      },
      getLabel(key) {
        return `${componentKey}.${key}`;
      }
    }
  }
</script>

<style>

</style>
