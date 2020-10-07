<template>
  <div class="wrapper">   
    <router-link :to="{name: 'AddFlashcard'}" exact>
      <Button class="text-azure">Dodaj fiszkę</Button>

      </router-link>
    <div class="flashcard-wrapper">   
      <Flashcard v-for="flashcard in flashcards" :key="flashcard.id" :flashcard="flashcard" @removeFlashcard="removeFlashcard" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  import Flashcard from './Flashcard'
  import Button from './Button'

  // var componentKey = 'dev.mazurkiewicz.m2flashcards.client.user.flashcards';

  export default {
    name: 'UserFlashcards',
    components: {
      Flashcard,
      Button
    },
    data() {
      return {
        flashcards: [],
      };
    },
    methods: {
      removeFlashcard(id) {
        const index = this.flashcards.findIndex(el => el.id === id);
        this.flashcards.splice(index,1);
      },
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

<style scoped>
  .wrapper {
    padding-top: 24px;
    grid-area: 3 / 2 / 5 / 5;
    max-width: 1200px;
  } 
  .flashcard-wrapper {
    padding-top: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }    
</style>
