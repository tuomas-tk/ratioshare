<template>
  <div class="settings" @hide="visible = false" @show="visible = true" v-if="visible">
    <h2>Settings</h2>
    <button class="btn-green-dark" @click="tutorial">RESTART TUTORIAL</button>
    <hr>
    Made in Finland!<br>
    Project on <a href="https://github.com/tuomas-tk/ratioshare">GitHub</a>
  </div>
</template>

<script>
import EventBus from './../EventBus.js'

export default {
  data () {
    return {
      visible: false
    }
  },
  created () {
    EventBus.$on('settings', () => {
      this.visible = !this.visible
      // eslint-disable-next-line
      gtag('event', 'settings')
    })
  },
  methods: {
    tutorial: function () {
      localStorage.setItem('tutorialFinished', 'false')
      // eslint-disable-next-line
      gtag('event', 'tutorial-restart')
      window.location.reload(false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';
.settings {
  background-color: $background-grey;
  border: 1px solid $border-grey;
  border-top: 0;
  border-radius: 0 0 $radius $radius;
  padding: 1rem;
  margin: -2rem auto 2rem auto;
  max-width: 600px;
  text-align: left;
}
</style>
