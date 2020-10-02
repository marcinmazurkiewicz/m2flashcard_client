<template>
  <div class="form-wrapper">
    <div class="alert alert-success" role="alert" v-if="loginSuccessfull">
      Zalogowano pomyślnie!
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
      <button v-on:click="sendLoginRequest()" type="button" class="btn btn-primary">Zaloguj</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.login';

  export default {
    name: 'Login',
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
        errors: [],
        loginSuccessfull: '',
        token: ''
      };
    },
    methods: {
      sendLoginRequest() {
        axios.post('http://localhost:8080/login', {
          username: this.email,
          password: this.password,
        }).then((response) => {
          this.errors = [];
          this.token = response.headers["authorization"];
          store.dispatch('saveToken', this.token);
          this.loginSuccessfull = response.status == 200;
        }).then(() => {
          axios.get('http://localhost:8080/api/v1/users/me', {
            headers: {
              'Authorization': this.token
            }
          }).then((response => {
            store.dispatch('saveLoggedUser', response.data.name);
            this.$router.push({ name: 'Home'})
          }));
        
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
