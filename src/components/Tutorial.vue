<template>
  <div class="tutorial" v-if="step >= 0">
    <div v-if="step > 0 && step < 6">Page {{ step }}/5</div>
    <transition name="fade" mode="out-in">
      <div v-if="step === 0" key="step0">
        <h1>Hey, would you like to try my amazing tutorial?</h1>
        <button class="btn-green-dark btn-lg" @click="next">Yes, show me around!</button><br>
        <button class="btn-black btn-sm" @click="close">No thanks, I know what I'm doing.</button>
      </div>
      <div v-if="step === 1" key="step1">
        <h1>Okey, here's a little story for you</h1>
        <p>Two friends, Mrs. A and Mr. B decide to play lottery together.</p>
        <p>Mrs. A puts in <strong>5€</strong> and Mr. B <strong>10€</strong>.</p>
        <p>They promise to share possible profits <strong>in proportion to their investments.</strong></p>
      </div>
      <div v-if="step === 2" key="step2">
        <h1>Now they have won 1 234 567 €</h1>
        <p>Unfortunately, both of them had been mostly sleeping during their math lessons.</p>
        <p><strong>But luckily, they know how to use ratioshare!</strong></p>
      </div>
      <div v-if="step === 3" key="step3">
        <h1>Step 1 - Input ratios</h1>
        <p>Ratio tells <strong>how</strong> the total amount should be shared.</p>
        <p><strong>In this case:</strong> type numbers 10 and 5 to the boxes under caption "Input ratios"</p>
      </div>
      <div v-if="step === 4" key="step4">
        <h1>Step 2 - Total amount</h1>
        <p>Total amount is <strong>what</strong> needs to be shared.</p>
        <p><strong>In this case:</strong> type the lottery winning, 1 234 567, to the box with caption <i>"Total amount of output to share"</i></p>
      </div>
      <div v-if="step === 5" key="step5">
        <h1>Step 3 - Hit <i>calculate</i> and see the output</h1>
        <p>The output shows how the total amount is shared.</p>
        <p><strong>In this case:</strong><br>Mrs. A gets 823 044.67 €<br>Mr. B gets 411 522.33 € </p>
      </div>
      <div v-if="step === 6" key="step6">
        <h1>You made it through the tutorial!</h1>
        <p>
          Remember: this application is <strong>not only</strong> for sharing lottery winnings!
        </p>
        <p>You can start the tutorial again from the settings menu on the top-right corner</p>
      </div>
    </transition>
    <button class="btn-green-dark btn-lg" @click="next" v-if="step > 0 && step < 6" :key="buttonKey">Next</button><br>
    <button class="btn-black btn-sm" @click="close" v-if="step > 0" :key="buttonKey">Close tutorial</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 0,
      buttonKey: 100
    }
  },
  created () {
    if (localStorage.getItem('tutorialFinished') === 'true') this.step = -1
  },
  methods: {
    close: function () {
      this.step = -1
      localStorage.setItem('tutorialFinished', 'true')
    },
    next: function () {
      this.buttonKey++
      this.step++
      if (this.step === 1) {
        this.$router.replace({
          name: 'Calculator',
          query: {
            in: '|',
            tot: ''
          }
        })
      } else if (this.step === 3) {
        this.$router.replace({
          name: 'Calculator',
          query: {
            in: '10|5',
            tot: ''
          }
        })
      } else if (this.step === 4) {
        this.$router.replace({
          name: 'Calculator',
          query: {
            in: '10|5',
            tot: '1234567'
          }
        })
      } else if (this.step === 5) {
        this.$emit('calculate')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';
div.tutorial {
  background-color: $background-grey;
  border: 1px solid $border-grey;
  border-radius: $radius;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 600px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
