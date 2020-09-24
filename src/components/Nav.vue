<template>
  <div class="header">
      <div class="container p-2 menu-top">
            <nav class="navbar navbar-light center-divs">
              <div class="row">
                <div class="col-8">
                  <a href="/">M2Flashcards</a>
                </div>
              </div>
                <ul class="navbar nav">
                  <li class="nav-item">
                    <button type="button" class="btn btn-primary">Zaloguj się</button>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{name: 'Register'}" exact class="menu-item"><button type="button" class="btn btn-success">Zrejestruj się</button></router-link>
                  </li>
                </ul>
              <!-- Collapsible content -->
            </nav>
            <!--/.Navbar-->
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
    
</style>
