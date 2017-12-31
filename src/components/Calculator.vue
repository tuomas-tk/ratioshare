<template>
  <div class="calculator">
    <div class="input">
      <h2>Input ratios</h2>
      <div v-for="row in input">
        <input type="text" v-model="row.value" @input="updateQuery(input, totalOutput)" placeholder="0" autocomplete="off" />
      </div>
      <button class="btn-black remove" @click="remove">- ROW</button>
      <button class="btn-black add" @click="add">+ ROW</button>
    </div><!--
 --><div class="process">
      <h2>Total amount of<br>output to share</h2>
      <input v-model="totalOutput" type="text" class="total" placeholder="0" />
      <button class="btn-green btn-lg" @click="calculate()">CALCULATE</button>
      <button class="btn-red btn-sm" @click="clear">CLEAR ALL</button>
    </div><!--
 --><div class="output">
      <h2>Output</h2>
      <div v-for="row in output">
        <input :value="row.value" readonly />
      </div>
      <button class="btn-black" @click="share">SHARE RESULTS</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    in: {
      type: Array,
      default () {
        return [{value: ''}, {value: ''}, {value: ''}]
      }
    },
    tot: {
      type: String,
      default: ''
    }},
  data () {
    return { output: [] }
  },
  created () {
    this.updateQuery()
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
        var value = (this.input[j].value * this.multiplier).toFixed(3)
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
      this.updateQuery([{value: ''}, {value: ''}, {value: ''}], '')
    },
    clearOutput: function () {
      this.output = []
      for (var i = 0; i < this.input.length; i++) {
        this.output.push({value: ''})
      }
    },
    share: function () {
      console.log('share')
    }
  }
}
</script>

<style lang="scss" scoped>
div.calculator {
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1020px;
}
div.input, div.process, div.output {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  padding: 1rem;
}
div.input, div.output {
  width: 33%;
}
div.process {
  width: 34%;
  padding-bottom: 1rem;
  background-color: #202040;
  border-radius: 5px;
  color: #FFFFFF;
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

  &.remove {
    color: #BB0000;
    &:hover {
      background-color: #CC0000;
      border-color: #770000;
      color: #FFFFFF;
    }
  }
  &.add {
    color: #008800;
    &:hover {
      background-color: #008800;
      border-color: #005500;
      color: #FFFFFF;
    }
  }
}


input {
  margin: 1rem 0;
  font-size: 1.5em;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #555555;
  border-radius: 5px;
  outline: 0;
  padding: 0.2em 0.5em;
  background-color: #FAFAFA;

  &:hover, &:focus {
    background-color: #FFFFFF;
  }
  &:focus {
    box-shadow: 0 0 .2em #44AA44;
  }
}
input.total {
  background-color: #202040;
  border-color: #FFFFFF;
  color: #FFFFFF;
  text-align: center;
  margin-top: 0;
}
div.output input {
  text-align: right;
}

</style>
