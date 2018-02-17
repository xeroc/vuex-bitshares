import API from '../services/api';
import * as types from '../mutations';

/**
 * Inits main connection to Bitsharesjs-WS
 * @param {function} callback - callback for status update
 */
export const initConnection = ({ commit, getters }) => {
  const connectionStatus = (status) => {
    const prevStatus = getters.getRpcStatus;
    const wsConnected = getters.isWsConnected;
    console.log('rpc status : ', status);
    commit(types.RPC_STATUS_UPDATE, { status });
    if (prevStatus === null && status === 'error') commit(types.WS_DISCONNECTED);
    if (!wsConnected && status === 'open') commit(types.WS_CONNECTED);
  };

  API.connectWs(connectionStatus).then(() => {
    // commit(types.WS_READY);
  });
};

