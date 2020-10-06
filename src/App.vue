<template>
  <div id="app-wrapper">
    <Nav />
    <Alertbar />
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Alertbar from './components/Alertbar'

export default {
  name: 'App',
  components: {
    Nav, Alertbar
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
  grid-template-rows: 100px 50px repeat(3, 1fr); 
  grid-column-gap: 0px;
  grid-row-gap: 0px; 

   background: #001519;
  color: #fff;
}

</style>
