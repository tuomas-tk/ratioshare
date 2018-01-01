<template>
  <div class="calculator">
    <Settings />
    <Tutorial @calculate="calculate" />
    <div id="input">
      <h2>Input ratios</h2>
      <div v-for="row in input">
        <NumberInput class="right" v-model="row.value" @input="updateQuery(input, totalOutput)" placeholder="0" />
      </div>
      <button class="btn-red-dark" @click="remove">- ROW</button>
      <button class="btn-green-dark" @click="add">+ ROW</button>
    </div><!--
 --><div id="process">
      <h2>Total amount of<br>output to share</h2>
      <NumberInput v-model="totalOutput" class="total" placeholder="0" />
      <button class="btn-green btn-lg" @click="calculate()">CALCULATE</button>
      <button class="btn-red btn-sm" @click="clear">CLEAR ALL</button>
    </div><!--
 --><div id="output">
      <h2>Output</h2>
      <div v-for="row in output">
        <NumberInput :value="row.value" readonly />
      </div>
      <button class="btn-black" @click="share">SHARE RESULTS</button>
      <transition name="fade">
        <SocialShare v-if="shareVisible" />
      </transition>
    </div>
  </div>
</template>

<script>
import NumberInput from './NumberInput.vue'
import SocialShare from './SocialShare.vue'
import Settings from './Settings.vue'
import Tutorial from './Tutorial.vue'

export default {
  name: 'Calculator',
  props: {
    in: {
      type: Array,
      default () {
        return [{value: ''}, {value: ''}]
      }
    },
    tot: {
      type: String,
      default: ''
    }},
  data () {
    return {
      output: [],
      shareVisible: false
    }
  },
  created () {
    this.updateQuery()
    this.calculate()
  },
  computed: {
    input: function () {
      return this.in
    },
    totalOutput: {
      get: function () {
        return this.tot
      },
      set: function (newValue) {
        this.updateQuery(this.input, newValue)
        this.clearOutput()
      }
    },
    multiplier: function () {
      var totalInput = 0
      for (var i = 0; i < this.input.length; i++) {
        var input = parseFloat(this.input[i].value)
        if (!isNaN(input)) totalInput += input
      }
      return this.totalOutput / totalInput
    }
  },
  watch: {
    $route: function () {
      this.clearOutput()
    }
  },
  methods: {
    updateQuery: function (inputValue, totValue) {
      if (inputValue === undefined) inputValue = this.input
      if (totValue === undefined) totValue = this.totalOutput
      var input = ''
      for (var i = 0; i < inputValue.length; i++) {
        input += inputValue[i].value + '|'
      }
      this.$router.replace({
        name: 'Calculator',
        query: {
          in: input.substr(0, input.length - 1),
          tot: totValue + ''
        }
      })
      this.clearOutput()
    },
    calculate: function () {
      this.output = []
      for (var j = 0; j < this.input.length; j++) {
        var value = (this.input[j].value * this.multiplier)
          .toFixed(5)
          .replace(/\.0+$/, '')
          .replace(/(\.\d)(0+)/, '$1')
        if (this.input[j].value === '') value = ''
        if (isNaN(value)) value = 'ERROR'
        this.output.push({ value: value })
      }
    },
    add: function () {
      this.input.push({value: ''})
      this.output.push({value: ''})
      this.updateQuery()
    },
    remove: function () {
      this.input.pop()
      this.output.pop()
      this.updateQuery()
    },
    clear: function () {
      this.updateQuery([{value: ''}, {value: ''}], '')
    },
    clearOutput: function () {
      this.output = []
      for (var i = 0; i < this.input.length; i++) {
        this.output.push({value: ''})
      }
    },
    share: function () {
      this.shareVisible = !this.shareVisible
      // eslint-disable-next-line
      gtag('event', 'share')
    }
  },
  components: {
    NumberInput,
    SocialShare,
    Settings,
    Tutorial
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';
div.calculator {
  padding: 0 1rem;
}
div#input, div#process, div#output {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  padding: 1rem;
}
@media (min-width: 768px) {
  div.calculator {
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 1020px;
  }
  div#input, div#output {
    margin-top: 2rem;
    width: 33%;
  }
  div#process {
    margin-top: 2rem;
    width: 34%;
  }
}
div#process {
  padding-bottom: 1rem;
  background-color: $background-blue;
  border-radius: 5px;
  color: $color-text-white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
