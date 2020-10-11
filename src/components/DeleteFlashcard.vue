<template>
    <Button class="text-red" @click="remove">Usuń</Button>
</template>

<script>
  import store from '../store'
  import axios from 'axios'
  import Button from './visual/Button'
  import { pushAlert } from '../mixins/PushAlert'


  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.deleteflashcard';

  export default {
    name: 'DeleteFlashcard',
    mixins: [pushAlert],
    components: {
        Button
    },
    props: ['flashcardId'],
    methods: {
      remove() {
       axios.delete(`http://localhost:8080/api/v1/flashcards/${this.flashcardId}/`, {
        headers: {
          'Authorization': store.getters.getToken
        }
      }).then(() => {
          this.pushAlert("Fiszka usunięta", 'warning')
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
