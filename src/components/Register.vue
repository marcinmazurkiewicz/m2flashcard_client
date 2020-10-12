<template>
  <div class="wrapper form-wrapper">
    <form>
      <TextInput v-model="email" id="email" type="email" :error="errors['email']">Adres email</TextInput>
      <TextInput v-model="password" id="password" type="password" :error="errors['password']">Hasło</TextInput>
      <TextInput v-model="confirmPassword" id="confirmPassword" type="confirmPassword" :error="errors['confirmPassword']">Potwierdź hasło</TextInput>

      
      <div class="action-buttons">
        <Button class="text-green" @click.native="sendRegisterRequest()">Zarejestruj</Button>
      </div>  
      
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import Button from './visual/Button'
  import TextInput from './visual/Input'
  var componentKey = 'dev.mazurkiewicz.m2flashcards.client.register';

  export default {
    name: 'Register',
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

