<template>
  <div class="header menu-top">
    <div class="container p-2">
      <nav class="navbar navbar-light center-divs">
        <div class="row">
          <div class="col-8">
            <a href="/">M2Flashcards</a>
          </div>
        </div>
        
        <ul class="navbar nav">
          <li class="nav-item">
            <router-link :to="{name: 'Login'}" exact class="menu-item"><button type="button" class="btn btn-primary">Zaloguj się</button></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Register'}" exact class="menu-item"><button type="button" class="btn btn-success">Zrejestruj się</button></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style>
    .menu-item  {
        text-decoration: none;
    }
    .menu-top {
      grid-area: 1 / 1 / 2 / 6;
      border-bottom: #2c3e50 solid 1px;
    }
    .btn {
      margin: 8px;
    }
    
</style>
