<template>
  <div class="wrapper">
    <form>
      <div class="group">
        <label for="question">Pytanie</label>
        <input v-model="question" class="form-field" id="question">
        <div class="alert alert-danger" role="alert" v-if="errors.question">
          {{ $t(getErrorMsg(errors.question.errorType)) }}
        </div>
      </div>        
      <div class="form-group">
        <label for="answer">Odpowiedź</label>
        <input v-model="answer" class="form-field" id="answer">
        <div class="alert alert-danger" role="alert" v-if="errors.answer">
          {{ $t(getErrorMsg(errors.answer.errorType)) }}
        </div>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" v-model="twoSided" class="form-check-input" id="twoSided" />
        <label for="twoSided" class="form-check-label">Symetryczna</label>
        <div class="alert alert-danger" role="alert" v-if="errors.twoSided">
          {{ $t(getErrorMsg(errors.twoSided.errorType)) }}
        </div>
      </div>   
      <div class="form-group form-check">
        <input type="checkbox" v-model="privy" class="form-check-input" id="privy" />
        <label for="privy" class="form-check-label">Prywatna</label>
        <div class="alert alert-danger" role="alert" v-if="errors.privy">
          {{ $t(getErrorMsg(errors.privy.errorType)) }}
        </div>
      </div>   
      <button v-on:click="save()" type="button" class="btn btn-primary">Zapisz</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  import { pushAlert } from '../mixins/PushAlert'

  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.addflashcard';

  export default {
    name: 'AddFlashcard',
    mixins: [pushAlert],
    data() {
      return {
        question: "",
        answer: "",
        twoSided: "",
        privy: "",
        errors: [],
        saveSuccessfull: '',
      };
    },
    methods: {
      save() {
        var data = {
            question: this.question,
            answer: this.answer,
            twoSided: this.twoSided,
            privy: this.privy
        };  
        axios.post('http://localhost:8080/api/v1/flashcards/',data , { headers: {
              'Authorization': store.getters.getToken
            }}).then(() => {
          this.errors = [];
          this.pushAlert('Fiszka została dodana', 'success');
          this.$router.push({ name: 'UserFlashcards'});
        }).catch((e) => {
          if(e.response.status == 403) {
            store.dispatch('logout');
            this.$router.push({ name: 'Home'});
          } else {
          this.errors = e.response.data.errors;
          }
        });
      },
      getErrorMsg(errorType) {
        return componentKey + '.' + errorType;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .form-field {
    display: block;
    margin: .75rem 0;
    padding: .5rem;
    font-family: $baseFont;
    background: transparent;
    color: $fontBaseColor;
    border: none;
    border-bottom: 2px solid $fontBaseColor;
  }
  .wrapper {
    border: 0.25rem solid $bgBorder;
    border-radius: 1.5rem;
    margin: 1rem;
    background: $bgLighter;
    padding: 2rem;
  }
</style>
