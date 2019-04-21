const initialState = {
  departure: '',
  destination: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      const retState = state;
      retState[action.key] = action.value;
      return retState;
    default:
      return state;
  }
}
