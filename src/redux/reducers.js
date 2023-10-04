const initialState = {
  activeCity: "New York",
  numberOfCardsToShow: 6,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CITY":
      return {
        ...state,
        activeCity: action.payload,
      };
    case "SET_NUMBER_OF_CARDS":
      return {
        ...state,
        numberOfCardsToShow: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
