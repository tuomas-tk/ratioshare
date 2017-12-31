import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator,
      props: function (route) {
        if (route.query.in !== undefined) {
          var input = route.query.in.split('|')
          var values = []
          for (var i = 0; i < input.length; i++) {
            values.push({value: input[i]})
          }
        }
        return {
          in: values,
          tot: route.query.tot
        }
      }
    }
  ]
})
