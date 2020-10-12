<template>
  <div class="wrapper form-wrapper">
    <form>
      <TextInput v-model="email" id="email" type="email" :error="errors['email']">Adres email</TextInput>
      <TextInput v-model="password" id="password" type="password" :error="errors['password']">Hasło</TextInput>

      <div class="common-error" v-if="loginError">
        <p>Nieprawidłowy login/hasło</p>
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
  import TextInput from './visual/Input'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.login';

  export default {
    name: 'Login',
    components: {
      Button,
      TextInput
    },
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
        errors: [],
        loginError: false,
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
          this.loginError = e.response.status == 403;
        });
      },
      getErrorMsg(errorType) {
        return componentKey + '.' + errorType;
      }
    }
  }
</script>
<style lang="scss" scoped>


  .common-error {
    margin: 0 auto;
    width: 90%;
    padding: 1rem 0;
    color: $red;
  }
</style>
