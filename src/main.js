import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(Vant)
const store = new Vuex.Store({
  state: {
    remoteUrl: 'app49:1234',
    localPort: '6666'
  },
  mutations: {
    changeRemoteUrl (state,url) {
      // 变更状态
      state.remoteUrl=url
    },
    changeLocalPort (state,port) {
      // 变更状态
      state.localPort=port
    },
  }
})
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
