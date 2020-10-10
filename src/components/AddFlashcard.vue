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
  import { pushAlert } from '../mixins/PushAlert'

  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.addflashcard';

  export default {
    name: 'AddFlashcard',
    mixins: [pushAlert],
    components: {
      Button,
      Badge
    },
    data() {
      return {
        question: "",
        answer: "",
        twoSided: false,
        privy: false,
        errors: []
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
  .badge-checkbox {
    display: inline-block;
    margin-right: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

  }
  .badge-checkbox-input {
    display: none;
  }
  .form-field {
    display: block;
    width: 95%;
    margin: .75rem 0;
    padding: .5rem;
    font-family: $baseFont;
    background: transparent;
    color: $fontBaseColor;
    border: none;
    border-bottom: 2px solid $fontBaseColor !important;

    &:focus, &:valid {
      + .form-label {
        top: .75rem;
        font-size: .75rem;
      }
    }
    &:invalid {
        box-shadow: none;
    }
  }

  .form-wrapper {
    border: 0.25rem solid $bgBorder;
    border-radius: 1.5rem;
    margin: 3rem;
    background: $bgLighter;
    padding: 2rem;
  }

   .form-group {
      margin: 1.5rem 1rem;
      padding-top: 1rem;
      position: relative;
      width: 90%;
    }

    .form-label {
      position: absolute;
      transition: 0.25s ease;
      -moz-transition: 0.25s ease;
      -webkit-transition: 0.25s ease;
      -o-transition: 0.25s ease;
      -ms-transition: 0.25s ease;
      color: $fontBaseColor;
      left: 0;
      top: 2rem;
    }
    .action-buttons {
      margin-top: 2rem;
    }
</style>
