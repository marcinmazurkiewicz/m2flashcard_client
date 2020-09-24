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
  text-align: center;
  color: #2c3e50;
}

.top-nav {
  width: 100%;
  text-align: left;
  padding: 24px;
  border-bottom: #2c3e50 solid;
}

.btn {
  margin: 12px;
}

.login-buttons {
  margin-left:900px;
}
</style>
