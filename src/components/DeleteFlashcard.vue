<template>
  <button type="button" class="btn btn-danger" @click="remove"> Usuń </button>
</template>

<script>
  import store from '../store'
  import axios from 'axios'
  import { pushAlert } from '../mixins/PushAlert'

  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.deleteflashcard';

  export default {
    name: 'DeleteFlashcard',
    mixins: [pushAlert],
    props: ['flashcardId'],
    methods: {
      remove() {
       axios.delete(`http://localhost:8080/api/v1/flashcards/${this.flashcardId}/`, {
        headers: {
          'Authorization': store.getters.getToken
        }
      }).then(() => {
          this.pushAlert("Fiszka usunięta", 'danger')
          this.$emit('flashcardRemoved', this.flashcardId)
          
      }).catch((e) => {
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
