<template>
  <nav class="top-nav">
    <p class="root-href">
      <a href="/">M2Flashcards</a>
    </p>
    <div class="nav-list" v-if="isLoggedUser">    
      <ul>
        <li class="nav-item">            
          <router-link :to="{name: 'UserFlashcards'}" exact>Twoje fiszki</router-link>
        </li>
        <li class="nav-item"><a>Twoje talie</a></li>
        <li class="nav-item"><a>Szukaj</a></li>
      </ul>
    </div>
    <div class="nav-buttons">
      <span v-if="isLoggedUser">
        <p style="display: inline">{{ loggedUserame }}</p>
        <Logout  />
      </span>
      <span v-else>
        <router-link :to="{name: 'Login'}" exact><Button class="text-primary">Zaloguj się</Button></router-link>
        <router-link :to="{name: 'Register'}" ><Button class="text-success">Zrejestruj się</Button></router-link>
      </span>
    </div>
  </nav>
</template>

<script>
  import store from '../store'
  import Logout from './Logout'
  import Button from './Button'

  export default {
    name: 'Nav',
    components: {
      Logout,
      Button
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
  .top-nav {
    width: 100%;
    grid-area: 1 / 1 / 2 / 6;
    border-bottom: 0.25rem solid #001d23;
    background: #001a1f;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 3fr 3fr;
    grid-template-rows: 1fr; 
  }
  .root-href {
    padding: 1.8rem;
    grid-area: 1 / 1 / 2 / 2;
  }
  .root-href a, .root-href a:hover {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bolder;
    margin-top: 2rem;
  } 
  .nav-list {
    grid-area: 1 / 2 / 2 / 3;
  }
  .nav-buttons {
    grid-area: 1 / 3 / 2 / 4;
  }
  .nav-item  {
    text-decoration: none;
    padding: 8px;
    display: inline;
  }
  .nav-item a {
    text-decoration: none;
    color: #ebedef;
    font-weight: bolder;
  }
  .nav-item a:hover {
    color: #17a2b8;
  }
</style>
