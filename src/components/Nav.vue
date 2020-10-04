<template>
  <div class="header menu-top">
    <div class="container p-2">
      <nav class="navbar navbar-light center-divs">
        <div class="row">
          <div class="col-8">
            <a href="/">M2Flashcards</a>
          </div>
        </div>
        
        <ul class="navbar nav" v-if="!isLoggedUser">
          <li class="nav-item">
            <router-link :to="{name: 'Login'}" exact><button type="button" class="btn btn-primary">Zaloguj się</button></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Register'}" ><button type="button" class="btn btn-success">Zrejestruj się</button></router-link>
          </li>
        </ul>
        <ul class="navbar nav" v-else>
          {{ loggedUserame }}
          <li class="nav-item">            
            <router-link :to="{name: 'UserFlashcards'}" exact>Twoje fiszki</router-link>
          </li>
          <li class="nav-item">Twoje talie</li>
          <li class="nav-item">Szukaj</li>
        </ul>
        <Logout v-if="isLoggedUser" />
      </nav>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import Logout from './Logout'

  export default {
    name: 'Nav',
    components: {
      Logout
    },
    data() {
      return {
      }
    },
    computed: {
      loggedUserame() {
        return store.getters.getLoggedUser.name;
      },
      isLoggedUser() {
        return store.getters.isLoggedUser;
      }
    },
    methods: {
      logout() {
        store.dispatch('logout');
        this.$router.push({ name: 'Home'})
      }
    }
  }
</script>

<style>
    .nav-item  {
        text-decoration: none;
        padding: 8px;
    }
    .menu-top {
      grid-area: 1 / 1 / 2 / 6;
      border-bottom: #2c3e50 solid 1px;
    }
    .btn {
      margin: 8px;
    }
    
</style>
