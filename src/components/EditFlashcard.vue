<template>
  <div class="wrapper form-wrapper">
    <form>
      <div class="form-group">
         <input v-model="question" class="form-field" id="question" required>
         <label for="question" class="form-label">Pytanie</label>
        <div class="alert alert-danger" role="alert" v-if="errors.question">
          {{ $t(getErrorMsg(errors.question.errorType)) }}
        </div>
      </div>        
      <div class="form-group">
        <input v-model="answer" class="form-field" id="answer" required>
        <label for="answer" class="form-label" >Odpowiedź</label>

        <!-- <div class="alert alert-danger" role="alert" v-if="errors.answer">
          {{ $t(getErrorMsg(errors.answer.errorType)) }}
        </div> -->
      </div>
      <div class="badge-checkbox">
        <label for="twoSided" class="form-check-label">
          <Badge :class="[twoSided ? 'text-azure' : 'text-gray']">dwustronna</Badge>
          <input type="checkbox" v-model="twoSided" class="badge-checkbox-input" id="twoSided" />
        </label>
        <div class="alert alert-danger" role="alert" v-if="errors.twoSided">
          {{ $t(getErrorMsg(errors.twoSided.errorType)) }}
        </div>
      </div>   

      <div class="badge-checkbox">
        <label for="privy" class="form-check-label">
          <Badge :class="[privy ? 'text-yellow' : 'text-gray']">prywatna</Badge>
          <input type="checkbox" v-model="privy" class="badge-checkbox-input" id="privy" />
        </label>
        <div class="alert alert-danger" role="alert" v-if="errors.privy">
          {{ $t(getErrorMsg(errors.privy.errorType)) }}
        </div>
      </div> 
            
      <div class="action-buttons">
        <Button class="text-azure" @click.native="save()">Zapisz</Button>
      </div>  
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  import Button from './Button'
  import Badge from './Badge'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.addflashcard';

  export default {
    name: 'AddFlashcard',
     components: {
      Button,
      Badge
    },
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

