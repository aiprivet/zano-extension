export const updateWalletsList = (dispatch, state) => {
  return dispatch({
    type: "WALLETS_LIST_UPDATED",
    payload: state,
  });
};

export const updateWalletData = (dispatch, state) => {
  return dispatch({
    type: "WALLET_DATA_UPDATED",
    payload: state,
  });
};

export const updateWalletConnected = (dispatch, state) => {
  return dispatch({
    type: "WALLET_CONNECTED_UPDATED",
    payload: state,
  });
};

export const updatePriceData = (dispatch, state) => {
  return dispatch({
    type: "PRICE_DATA_UPDATED",
    payload: state,
  });
};

export const updateDisplay = (dispatch, state) => {
  return dispatch({
    type: "DISPLAY_CURRENCY_UPDATED",
    payload: state,
  });
};

export const updateLoading = (dispatch, state) => {
  return dispatch({
    type: "LOADING_UPDATED",
    payload: state,
  });
};

export const updateBalancesHidden = (dispatch, state) => {
  return dispatch({
    type: "BALANCES_HIDDEN_UPDATED",
    payload: state,
  });
};
