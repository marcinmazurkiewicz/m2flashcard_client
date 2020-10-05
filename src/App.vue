<template>
  <div id="app-wrapper">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
#app-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100px repeat(4, 1fr); 
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
}

</style>
