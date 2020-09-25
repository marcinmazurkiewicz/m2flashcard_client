<template>
  <div class="form-wrapper">
        <form>
            <div class="form-group">
                <label for="userEmail">Adres email</label>
                <input v-model="userEmail" type="email" class="form-control" id="userEmail">
            </div>
            <div class="form-group">
                <label for="userPassword">Hasło</label>
                <input v-model="userPassword" type="password" class="form-control" id="userPassword">
            </div>
            <div class="form-group">
                <label for="userPasswordConfirm">Potwierdź hasło</label>
                <input v-model="userPasswordConfirm" type="password" class="form-control" id="userPasswordConfirm">
            </div>
          
            <button v-on:click="sendRegisterRequest()" type="button" class="btn btn-primary">Zarejestruj</button>
        </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      userEmail: "",
      userPassword: "",
      userPasswordConfirm: ""
    };
  },
  methods: {
      sendRegisterRequest() {
          axios.post('http://localhost:8080/api/v1/users/', {
              email: this.userEmail,
              password: this.userPassword,
              confirmPassword: this.userPasswordConfirm
          }).then((response) => {
              console.log(response);
          }).catch((e) => {
            console.log(e);
        });
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
