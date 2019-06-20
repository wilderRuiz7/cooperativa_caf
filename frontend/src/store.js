import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'principal-layout',
    plans: [],
    novelties: [],
    tips: [],
    type_class: [],
    users: [],
    products: [],
    sales: []
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    },
    SET_NOVELTIES (state, newNovelty) {
      state.novelties = newNovelty
    },
    SET_PLANS (state, newPlan) {
      state.plans = newPlan
    },
    SET_TIPS (state, newTip) {
      state.tips = newTip
    },
    SET_TYPE_CLASS (state, newType_class) {
      state.type_class = newType_class
    },
    SET_SALES (state, newSale){
      state.sales = newSale
     },
    SET_PRODUCTS (state, newProduct){
      state.products = newProduct
    },
    SET_USERS (state, newUser) {
      state.users = newUser
    }
    },
    SET_DIETS (state, newDiet){
     state.siet = newDiet
    },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
