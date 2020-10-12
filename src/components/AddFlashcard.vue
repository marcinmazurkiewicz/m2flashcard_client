<template>
  <div class="wrapper form-wrapper">
    <form>
      <TextInput v-model="question" id="question" :error="errors['question']">Pytanie</TextInput>
      <TextInput v-model="answer" id="answer" :error="errors['answer']">Odpowiedź</TextInput>
     
      <div class="badges-group">
        <BadgeCheckbox v-model="twoSided" colorClass="text-azure">dwustronna</BadgeCheckbox>
        <BadgeCheckbox v-model="privy"  colorClass="text-yellow">prywatna</BadgeCheckbox>
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
  
  import BadgeCheckbox from './visual/BadgeCheckbox'
  import Button from './visual/Button'
  import TextInput from './visual/Input'

  import { pushAlert } from '../mixins/PushAlert'

  export default {
    name: 'AddFlashcard',
    mixins: [pushAlert],
    components: {
      Button,
      TextInput,
      BadgeCheckbox
    },
    data() {
      return {
        question: "",
        answer: "",
        twoSided: false,
        privy: false,
        errors: {}
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  .badges-group {
    padding-top: 1rem;
    position: relative;
    width: 90%;
    margin: 0 auto;
  }
</style>
