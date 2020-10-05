<template>
  <div class="flashcard-wrapper">
    <div ref="alerts">
    </div>
    
    <router-link :to="{name: 'AddFlashcard'}" exact><button type="button" class="btn btn-primary">Dodaj fiszkę</button></router-link>

    <Flashcard v-for="flashcard in flashcards" :key="flashcard.id" :flashcard="flashcard" @removeFlashcard="removeFlashcard" />
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  import Flashcard from './Flashcard'
  import Alertbar from './Alertbar'

  // var componentKey = 'dev.mazurkiewicz.m2flashcards.client.user.flashcards';

  export default {
    name: 'UserFlashcards',
    components: {
      Flashcard
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
        this.getAlert("Fiszka usunięta", 'danger');
      },
      pushAlert(msg, type) {
       Alertbar.pushAlert(msg, type); 
      }
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
    },
    mounted() {
      this.$root.$emit('pushAlert', "message", "primary");
    }
  }
</script>

<style>
  .flashcard-wrapper {
    padding-top: 24px;
    grid-area: 2 / 2 / 5 / 5;
  }    
</style>
