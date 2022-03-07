import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from 'lodash'
Vue.prototype._ = _
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import flyRobin from './components/flyrobin/src/index'
import './components/flyrobin/lib/theme/index.css'

Vue.use(flyRobin)

new Vue({
  // 将路由整合到vue中
  router,
  render: h => h(App)
}).$mount('#app')