<template>
  <div class="wrapper">
    <form>
      <div class="form-group">
        <label for="question">Pytanie</label>
        <input v-model="question" class="form-control" id="question">
        <div class="alert alert-danger" role="alert" v-if="errors.question">
          {{ $t(getErrorMsg(errors.question.errorType)) }}
        </div>
      </div>        
      <div class="form-group">
        <label for="answer">Odpowiedź</label>
        <input v-model="answer" class="form-control" id="answer">
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
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.addflashcard';

  export default {
    name: 'AddFlashcard',
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
        axios.patch('http://localhost:8080/api/v1/flashcards/' + this.$route.params.id,data , { headers: {
              'Authorization': store.getters.getToken
            }}).then(() => {
          this.errors = [];
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
    },
    beforeMount() {
        var addr = 'http://localhost:8080/api/v1/flashcards/' + this.$route.params.id;
        axios.get(addr,  { headers: {
              'Authorization': store.getters.getToken
            }}).then((response) => {
                this.question = response.data.question;
                this.answer = response.data.answer;
                this.twoSided = response.data.twoSided;
                this.privy = response.data.privy;
            })
    }
  }
</script>

