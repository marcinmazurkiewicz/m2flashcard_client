<template>
  <div class="wrapper form-wrapper">
    <div class="alert alert-success" role="alert" v-if="loginSuccessfull">
      Zalogowano pomyślnie!
    </div>
    <form>
      <div class="form-group">
        <input v-model="email" type="email" class="form-field" id="email" required>
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
       <div class="action-buttons">
        <Button class="text-azure" @click.native="sendLoginRequest()">Zaloguj</Button>
      </div>  
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store'
  import Button from './visual/Button'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.login';

  export default {
    name: 'Login',
    components: {
      Button
    },
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
            store.dispatch('saveLoggedUser', response.data);
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

