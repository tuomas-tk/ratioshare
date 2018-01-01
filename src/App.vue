<template>
  <div id="app">
    <header>
      <!-- <img src="./assets/logo.png"> -->
      <h1><a href="/">ratioshare</a></h1>
      <button class="btn-black btn-sm" @click="toggleSettings">SETTINGS</button>
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
@import './variables';
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: $background-white;
}
#app {
  font-family: 'Open Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-text;
}
h1, h2, h3, h4, h5, h6, button {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 400;
}

header {
  border-top: 1px solid $background-grey;
  border-bottom: 1px solid $border-grey;
  background-color: $background-grey;
  margin-bottom: 2rem;

  h1 {
    font-size: 4.5rem;
    line-height: 1.2em;
    margin: 0;
    padding: 0;
    a {
      color: $color-text;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    position: absolute;
    right: 0.5em;
  }
}

@media (min-width: 768px) {
  header button {
    top: 1.2em;
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
  border-color: $color-green-light;
  color: $color-green-light;
  box-shadow: 0 .1em .2em #000000, 0 0 .2em #000000 inset;

  &:hover {
    box-shadow: 0px 0px .6em $color-green-light, 0px 0px .2em $color-green-light inset;
    text-shadow: 0px 0px .4em $color-green-light;
    background-color: rgba(0, 255, 0, 0.1);
  }
}
.btn-red {
  border-color: #CCCCCC;
  color: #EEEEEE;
  box-shadow: 0 .1em .2em #000000, 0 0 .2em #000000 inset;

  &:hover {
    box-shadow: 0px 0px .6em $color-red-light, 0px 0px .2em $color-red-light inset;
    text-shadow: 0px 0px .4em $color-red-light;
    background-color: rgba(255, 0, 0, 0.3);
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
}
.btn-black {
  border-color: $color_text;
  &:hover {
    background-color: $color_text;
    color: #FFFFFF;
  }
}
.btn-red-dark {
  color: $color-red-dark;
  border-color: $color-red-dark;
  &:hover {
    background-color: $color-red-dark;
    border-color: darken($color-red-dark, 15);
    color: #FFFFFF;
  }
}
.btn-green-dark {
  color: $color-green-dark;
  border-color: $color-green-dark;
  &:hover {
    background-color: $color-green-dark;
    border-color: darken($color-green-dark, 15);
    color: #FFFFFF;
  }
}
</style>
