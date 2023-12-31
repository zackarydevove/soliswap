import { createStore } from "redux";
const initialState = {
  tokenToPay: null,
  tokenToReceive: null,
  selectingFor: null,
  isWalletConnected: false,
};

function tokenReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_TOKEN_TO_PAY':
      return { ...state, tokenToPay: action.payload };
    case 'SET_TOKEN_TO_RECEIVE':
      return { ...state, tokenToReceive: action.payload };
	case 'SET_SELECTING_FOR':
	  return { ...state, selectingFor: action.payload };
  case 'TOGGLE_WALLET_CONNECTION':
    return { ...state, isWalletConnected: !state.isWalletConnected };
	default:
	  return state;
  }
}

const store = createStore(tokenReducer);

export default store;