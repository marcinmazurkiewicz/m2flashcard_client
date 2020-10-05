<template>
  <div class="flashcard-wrapper">
    <router-link :to="{name: 'AddFlashcard'}" exact><button type="button" class="btn btn-primary">Dodaj fiszkę</button></router-link>

    <Flashcard v-for="flashcard in flashcards" :key="flashcard.id" :flashcard="flashcard" />
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  import Flashcard from './Flashcard'
  // var componentKey = 'dev.mazurkiewicz.m2flashcards.client.user.flashcards';

  export default {
    name: 'Login',
    components: {
      Flashcard
    },
    data() {
      return {
        flashcards: [],
      };
    },
    beforeMount() {
      var userId = store.getters.getLoggedUser.details.userId;
      axios.get(`http://localhost:8080/api/v1/flashcards/author/${userId}/`, {
        headers: {
          'Authorization': store.getters.getToken
        }
      }).then((response) => {
        this.flashcards = response.data;
      })
    }
  }
</script>

<style>
  .flashcard-wrapper {
    padding-top: 24px;
    grid-area: 2 / 2 / 5 / 5;
  }    
</style>
