<template>
  <div class="wrapper form-wrapper">
    <form>
      <TextInput v-model="question" id="question">Pytanie</TextInput>
      <TextInput v-model="answer" id="answer">Odpowiedź</TextInput>
     
      <BadgeCheckbox v-model="twoSided" colorClass="text-azure">dwustronna</BadgeCheckbox>
      <BadgeCheckbox v-model="privy"  colorClass="text-yellow">prywatna</BadgeCheckbox>
            
      <div class="action-buttons">
        <Button class="text-azure" @click.native="save()">Zapisz</Button>
      </div>  
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  
  import BadgeCheckbox from './visual/BadgeCheckbox'
  import Button from './visual/Button'
  import TextInput from './visual/Input'

  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.addflashcard';

  export default {
    name: 'AddFlashcard',
     components: {
      Button,
      BadgeCheckbox,
      TextInput
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

