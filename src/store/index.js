import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

/*
actions are async, they call mutations which actually update state. State is
linked to computed properties so they will automatically update upon mutation call.
Getters are something that retrieves state and can modify it on fetch for a component,
but it doesn't actually change the state (only for that component's use)
*/
