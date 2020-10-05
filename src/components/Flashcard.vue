<template>
  <div class="flashcard">
    <p>ID: {{flashcard.id}}</p>
    <p>Pytanie: {{flashcard.question}}</p>
    <p>Odpowiedź: {{flashcard.answer}}</p>
    <p>Symetryczna: {{flashcard.twoSided}}</p>
    <p>Prywatna: {{flashcard.privy}}</p>
    <router-link :to="{name: 'EditFlashcard', params: {id: flashcard.id}}" ><button type="button" class="btn btn-primary">Edytuj</button> </router-link>
    <DeleteFlashcard :flashcardId="flashcard.id" @flashcardRemoved="removeFlashcard" />
  </div>
</template>

<script>
  import DeleteFlashcard from './DeleteFlashcard'

  export default {
    name: 'Flashcard',
    props: ['flashcard'],
    components: {
      DeleteFlashcard
    },
    data() {
     return {}
    },
    methods: {
      removeFlashcard() {
        this.$emit('removeFlashcard', this.flashcard.id);
      }
    }
  }
</script>

<style>
  .flashcard {
    border: 2px solid #d0d0d0;
    border-radius: 25px;
    margin: 16px;
    padding: 16px;
  }
</style>
