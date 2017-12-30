<template>
  <div id="app">
    <header>
      <!-- <img src="./assets/logo.png"> -->
      <h1>ratioshare</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}
#app {
  font-family: 'Open Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444444;
}
h1, h2, h3, h4, h5, h6, button {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 400;
}

header {
  border-top: 1px solid #fafafa;
  border-bottom: 1px solid #aaaaaa;
  background-color: #fafafa;
  margin-bottom: 2rem;
}
h1 {
  font-size: 4.5em;
  margin: 0;
}
</style>
