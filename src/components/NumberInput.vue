<template>
  <input
    ref="input"
    :value="value"
    @input="updateValue($event.target.value)"
    type="text"
    autocomplete="off"
    :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    value: {
      default: 0
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  watch: {
    value: function () {
      this.updateValue(this.value)
    }
  },
  methods: {
    updateValue: function (value) {
      var formattedValue = value
        .trim() // Remove whitespace on either side
        .replace(/[^0-9.]/g, '') // Remove characters
      var spaceFormattedValue = spacify(formattedValue)
      if (spaceFormattedValue !== value) {
        this.$refs.input.value = spaceFormattedValue
      }
      this.$emit('input', formattedValue)
    }
  }
}
function spacify (str) {
  str = str.replace(' ', '')
  var end = str.indexOf('.')
  if (end === -1) end = str.length
  for (var i = end - 1; i > 0; i--) {
    if ((end - i) % 3 === 0) {
      str = str.slice(0, i) + ' ' + str.slice(i)
    }
  }
  return str
}
</script>

<style lang="scss" scoped>
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
input.right {
  text-align: right;
}
</style>
