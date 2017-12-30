<template>
  <div class="calculator">
    <div class="input">
      <h2>Input ratios</h2>
      <div v-for="row in input">
        <input type="text" v-model="row.value" placeholder="0" autocomplete="off" />
      </div>
      <button class="clear" @click="remove">- ROW</button> <button class="clear" @click="add">+ ROW</button>
    </div><!--
 --><div class="process">
      <h2>Total amount of<br>output to share</h2>
      <input v-model="totalOutput" type="text" class="total" placeholder="0" />
      <button class="calculate">CALCULATE</button>
      <button class="clear" @click="clear">CLEAR ALL</button>
    </div><!--
 --><div class="output">
      <h2>Output</h2>
      <div v-for="row in output">
        <input :value="row.value" readonly />
      </div>
      <button class="clear" @click="share">SHARE RESULTS</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: [
        {value: ''},
        {value: ''},
        {value: ''}
      ],
      totalOutput: ''
    }
  },
  computed: {
    totalInput: function () {
      var sum = 0
      for (var i = 0; i < this.input.length; i++) {
        var input = parseFloat(this.input[i].value)
        if (!isNaN(input)) sum += input
      }
      return sum
    },
    multiplier: function () {
      return this.totalOutput / this.totalInput
    },
    output: function () {
      var output = []
      for (var i = 0; i < this.input.length; i++) {
        var value = (this.input[i].value * this.multiplier).toFixed(3)
        if (this.input[i].value === '' || isNaN(value)) value = ''
        output.push({ value: value })
      }
      return output
    }
  },
  methods: {
    add: function () {
      this.input.push({})
    },
    remove: function () {
      this.input.pop()
    },
    clear: function () {
      this.totalOutput = ''
      this.input = [{value: ''}]
    },
    share: function () {
      console.log('share')
    }
  }
}
</script>

<style scoped>
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
button.calculate, button.clear {
  display: inline-block;
  line-height: 2em;
  padding: 0 0.8em;
  margin: .7em .5em;
  background-color: transparent;
  box-shadow: 0px .1em .2em #000000;
  cursor: pointer;
  transition: .1s all;
  border-radius: calc(1em + 3px);
  font-weight: 700;
  border-width: 3px;
  border-style: solid;
}
button.calculate {
  font-size: 1.6rem;
  border-color: #00FF00;
  color: #00FF00;
}
button.calculate:hover {
  box-shadow: 0px 0px .6em #00FF00, 0px 0px .2em #00FF00 inset;
  text-shadow: 0px 0px .4em #00FF00;
  background-color: rgba(0, 255, 0, 0.1);
}
button.clear {
  font-size: 1.2rem;
  border-color: #CCCCCC;
  color: #EEEEEE;
}
button.clear:hover {
  box-shadow: 0px 0px .6em #FF0000, 0px 0px .2em #FF0000 inset;
  text-shadow: 0px 0px .4em #FF0000;
  background-color: rgba(255, 0, 0, 0.3);
  color: #FFFFFF;
  border-color: #FFFFFF;
}
input.total {
  background-color: #202040;
  border-color: #FFFFFF;
  color: #FFFFFF;
  text-align: center;
  margin-top: 0;
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
}

div.output input {
  text-align: right;
}

</style>
