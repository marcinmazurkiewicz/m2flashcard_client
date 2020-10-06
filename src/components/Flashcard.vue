<template>
  <div class="flashcard">
    <p class="flashcard-id">#{{flashcard.id}}</p>
    <h1 class="flashcard-question">{{flashcard.question}}</h1>
    <h4 class="flashcard-answer">({{flashcard.answer}})</h4>
    <div class="flashcard-badge">
      <span v-if="flashcard.privy" class="badge badge-danger">prywatna</span> 
      <span v-if="flashcard.twoSided" class="badge badge-info">dwustronna</span>
    </div>
    <div class="flashcard-options">
      <router-link :to="{name: 'EditFlashcard', params: {id: flashcard.id}}" >
        <Button class="text-success">Edytuj</Button>
      </router-link>
      <DeleteFlashcard :flashcardId="flashcard.id" @flashcardRemoved="removeFlashcard" />
    </div>
  </div>
</template>

<script>
  import DeleteFlashcard from './DeleteFlashcard'
  import Button from './Button'


  export default {
    name: 'Flashcard',
    props: ['flashcard'],
    components: {
      DeleteFlashcard, 
      Button
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

<style lang="scss" scoped>

  .flashcard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 64px auto auto 60px; 
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
    border: 0.25rem solid #001d23;
    border-radius: 25px;
    margin: 16px;
    width: 500px;
    background: #001a1f;
  }
  .flashcard-id {
    font-weight: bold;
    margin: 24px;
    grid-area: 1 / 1 / 2 / 2;
  }
  .flashcard-question {
        grid-area: 2 / 1 / 3 / 3;
        text-align: center;
        margin: 1.2rem;
        margin-bottom: 0.4rem;
  }
  .flashcard-answer {
        grid-area: 3 / 1 / 4 / 3;
        text-align: center;
        margin: 1.2rem;
  }
  .flashcard-badge {
        grid-area: 1 / 2 / 3 / 3;
        margin-top: 24px;
        margin-right: 24px;
        text-align: right;
  }
  .flashcard-options {
        grid-area: 4 / 2 / 5 / 3;
        text-align: right;
        margin-right: 24px;
        margin-bottom: 32px;
  }
  .badge {
    padding: 10px 16px;
    margin-left: 8px;
  }
 


</style>
