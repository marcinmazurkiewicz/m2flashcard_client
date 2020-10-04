<template>
  <div class="flashcard">
    <p>ID: {{flashcard.id}}</p>
    <p>Pytanie: {{flashcard.question}}</p>
    <p>Odpowiedź: {{flashcard.answer}}</p>
    <p>Symetryczna: {{flashcard.twoSided}}</p>
    <p>Prywatna: {{flashcard.privy}}</p>
  </div>
</template>

<script>

  export default {
    name: 'Flashcard',
    props: ['flashcard'],
    data() {
     return {}
    },
    methods: {

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
