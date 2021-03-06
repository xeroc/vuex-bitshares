import * as types from '../mutations';
import * as actions from '../actions/connection';
import * as getters from '../getters/connection';

const initialState = {
  wsConnected: false,
  rpcStatus: null
};

const mutations = {
  [types.WS_CONNECTED](state) {
    state.wsConnected = true;
  },
  [types.WS_DISCONNECTED](state) {
    state.wsConnected = false;
  },
  [types.RPC_STATUS_UPDATE](state, { status }) {
    state.rpcStatus = status;
  }
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
  namespaced: true
};
