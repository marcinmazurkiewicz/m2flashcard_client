<template>
  <div id="app-wrapper">
    <Nav />
    <Alerts />
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Alerts from './components/Alerts'

export default {
  name: 'App',
  components: {
    Nav, Alerts
  }
}
</script>

<style lang="scss">
  html, body {
    background: $bgDarker !important;
    color:  $fontBaseColor !important;
    font-family: $baseFont;
    margin: 0;
    padding: 0;

  }

  #app-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 100px auto 100px; 
    grid-column-gap: 0;
    grid-row-gap: 0; 
    background: inherit;
  }
</style>
