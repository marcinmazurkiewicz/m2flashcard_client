<template>
  <div class="form-wrapper">
    <div class="alert alert-success" role="alert" v-if="registerSuccessfull">
      Rejestracja zakończona pomyślnie!
    </div>
    <form>
      <div class="form-group">
        <label for="email">Adres email</label>
        <input v-model="email" type="email" class="form-control" id="email">
        <div class="alert alert-danger" role="alert" v-if="errors.email">
          {{ $t(getErrorMsg(errors.email.errorType)) }}
        </div>
      </div>        
      <div class="form-group">
        <label for="password">Hasło</label>
        <input v-model="password" type="password" class="form-control" id="password">
        <div class="alert alert-danger" role="alert" v-if="errors.password">
          {{ $t(getErrorMsg(errors.password.errorType)) }}
        </div>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Potwierdź hasło</label>
        <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword">
        <div class="alert alert-danger" role="alert" v-if="errors.confirmPassword">
          {{ $t(getErrorMsg(errors.confirmPassword.errorType)) }}
        </div>
      </div>   
      <button v-on:click="sendRegisterRequest()" type="button" class="btn btn-primary">Zarejestruj</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.register';

  export default {
    name: 'Register',
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

<style>
  .form-wrapper {
    padding-top: 24px;
    grid-area: 2 / 2 / 5 / 5;
  }
</style>
