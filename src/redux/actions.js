export const setNumberOfCardsToShow = (count) => {
  return {
    type: "SET_NUMBER_OF_CARDS",
    payload: count,
  };
};

export const setActiveCity = (city) => {
  return {
    type: "SET_ACTIVE_CITY",
    payload: city,
  };
};
