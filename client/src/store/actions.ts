import { TokenInterface } from "../interfaces/TokenInterface";

export const setTokenToPay = (token: TokenInterface) => ({
	type: 'SET_TOKEN_TO_PAY',
	payload: token,
});
  
export const setTokenToReceive = (token: TokenInterface) => ({
	type: 'SET_TOKEN_TO_RECEIVE',
	payload: token,
});

export const setSelectingFor = (selectingFor: 'pay' | 'receive') => ({
	type: 'SET_SELECTING_FOR',
	payload: selectingFor,
});