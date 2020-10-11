<template>
  <div class="wrapper form-wrapper">
    <form>
      <div class="form-group">
        <input v-model="email" type="email"  class="form-field" id="email" required>
        <label for="email" class="form-label">Adres email</label>
        <div class="alert alert-danger" role="alert" v-if="errors.email">
          {{ $t(getErrorMsg(errors.email.errorType)) }}
        </div>
      </div>        
      <div class="form-group">
        <input v-model="password" type="password" class="form-field" id="password" required>
        <label for="password" class="form-label">Hasło</label>
        <div class="alert alert-danger" role="alert" v-if="errors.password">
          {{ $t(getErrorMsg(errors.password.errorType)) }}
        </div>
      </div>
      <div class="form-group">
        <input v-model="confirmPassword" type="password" class="form-field" id="confirmPassword" required>
        <label for="confirmPassword" class="form-label">Potwierdź hasło</label>
        <div class="alert alert-danger" role="alert" v-if="errors.confirmPassword">
          {{ $t(getErrorMsg(errors.confirmPassword.errorType)) }}
        </div>
      </div>   
             <div class="action-buttons">
        <Button class="text-green" @click.native="sendRegisterRequest()">Zarejestruj</Button>
      </div>  
      
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import Button from './visual/Button'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.register';

  export default {
    name: 'Register',
    components: {
      Button
    },
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
        errors: [],
        registerSuccessfull: '',
      };
    },
    methods: {
      sendRegisterRequest() {
        axios.post('http://localhost:8080/api/v1/users/', {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }).then((response) => {
          this.errors = [];
          this.registerSuccessfull = response.status == 201;
        }).catch((e) => {
          this.errors = e.response.data.errors;
        });
      },
      getErrorMsg(errorType) {
        return componentKey + '.' + errorType;
      }
    }
  }
</script>

