export const initialState = {
  user: false,
  language: "EN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_LANG":
      return {
        ...state,
        lang: action.lang,
      };
    default:
      return state;
  }
};

export default reducer;
