<template>
  <div class="settings" @hide="visible = false" @show="visible = true" v-if="visible">
    <h2>Settings</h2>
    <button class="btn-green-dark" @click="tutorial">RESTART TUTORIAL</button>
    <hr>
    Project on <a href="https://github.com/tuomas-tk/ratioshare">GitHub</a>!
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
      console.log('got setting')
      console.log(this.visible)
      this.visible = !this.visible
    })
  },
  methods: {
    tutorial: function () {
      localStorage.setItem('tutorialFinished', 'false')
      window.location.reload(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  background-color: #FAFAFA;
  border: 1px solid #A0A0A0;
  border-top: 0;
  border-radius: 0 0 5px 5px;
  padding: 1rem;
  margin: -2rem auto 2rem auto;
  max-width: 600px;
  text-align: left;
}
</style>
