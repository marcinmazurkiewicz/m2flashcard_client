<template>
  <div class="flashcard">
    <p class="flashcard-id">#{{flashcard.id}}</p>
    <h1 class="flashcard-question">{{flashcard.question}}</h1>
    <h4 class="flashcard-answer">({{flashcard.answer}})</h4>
    <div class="flashcard-badge">
      <Badge v-if="flashcard.privy" class="text-yellow">prywatna</Badge> 
      <Badge v-if="flashcard.twoSided" class="text-azure">dwustronna</Badge>
    </div>
    <div class="flashcard-options">
      <router-link :to="{name: 'EditFlashcard', params: {id: flashcard.id}}" >
        <Button class="text-green">Edytuj</Button>
      </router-link>
      <DeleteFlashcard :flashcardId="flashcard.id" @flashcardRemoved="removeFlashcard" />
    </div>
  </div>
</template>

<script>
  import DeleteFlashcard from './DeleteFlashcard'
  import Button from './Button'
  import Badge from './Badge'

  export default {
    name: 'Flashcard',
    props: ['flashcard'],
    components: {
      DeleteFlashcard, 
      Button,
      Badge
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
    grid-template-rows: 3.5rem auto auto 3.5rem; 
    grid-column-gap: 0;
    grid-row-gap: 0; 
    border: 0.25rem solid $bgBorder;
    border-radius: 1.5rem;
    margin: 1rem;
    width: 500px;
    background: $bgLighter;
  }
  .flashcard-id {
    font-weight: bold;
    margin: 1.5rem;
    color:  $fontGray;
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
        margin-top: 0.4rem;
        margin-bottom: 2rem;
        color:  $fontDarker;
  }
  .flashcard-badge {
        grid-area: 1 / 2 / 3 / 3;
        margin-top: 1.5rem;
        margin-right: 1.5rem;
        text-align: right;
  }
  .flashcard-options {
        grid-area: 4 / 2 / 5 / 3;
        text-align: right;
        margin-right: 1.5rem;
        margin-bottom: 2rem;
  }
</style>
