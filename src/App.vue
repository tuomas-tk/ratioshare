<template>
  <div id="app">
    <header>
      <!-- <img src="./assets/logo.png"> -->
      <h1><a href="/">ratioshare</a></h1>
      <button class="btn-black" @click="toggleSettings">SETTINGS</button>
    </header>
    <router-view />
  </div>
</template>

<script>
import EventBus from './EventBus.js'

export default {
  name: 'app',
  methods: {
    toggleSettings: function () {
      EventBus.$emit('settings')
    }
  }
}
</script>

<style lang="scss">
$color_text: #444444;
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

  h1 {
    display: inline-block;
    font-size: 4.5rem;
    line-height: 1.2em;
    margin: 0;
    padding: 0;
    a {
      color: #444444;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
  }
}


button {
  display: inline-block;
  line-height: 2em;
  padding: 0 0.8em;
  margin: .7em .5em;
  background-color: transparent;
  cursor: pointer;
  transition: .1s all;
  border-radius: calc(1em + 3px);
  font-size: 1.2rem;
  font-weight: 700;
  border-width: 3px;
  border-style: solid;
}
.btn-lg {
  font-size: 1.6rem;
}
.btn-sm {
  font-size: .9rem;
}
.btn-green {
  border-color: #00FF00;
  color: #00FF00;
  box-shadow: 0 .1em .2em #000000, 0 0 .2em #000000 inset;

  &:hover {
    box-shadow: 0px 0px .6em #00FF00, 0px 0px .2em #00FF00 inset;
    text-shadow: 0px 0px .4em #00FF00;
    background-color: rgba(0, 255, 0, 0.1);
  }
}
.btn-red {
  border-color: #CCCCCC;
  color: #EEEEEE;
  box-shadow: 0 .1em .2em #000000, 0 0 .2em #000000 inset;

  &:hover {
    box-shadow: 0px 0px .6em #FF0000, 0px 0px .2em #FF0000 inset;
    text-shadow: 0px 0px .4em #FF0000;
    background-color: rgba(255, 0, 0, 0.3);
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
}
.btn-black {
  border-color: #444444;
  &:hover {
    background-color: #444444;
    color: #FFFFFF;
  }
}
.btn-red-dark {
  color: #BB0000;
  border-color: #BB0000;
  &:hover {
    background-color: #CC0000;
    border-color: #770000;
    color: #FFFFFF;
  }
}
.btn-green-dark {
  color: #008800;
  border-color: #008800;
  &:hover {
    background-color: #008800;
    border-color: #005500;
    color: #FFFFFF;
  }
}
</style>
