const initState = {
  };
  
  const reducer = (state = initState, action ) => {
    switch (action.type) {
      case "LOAD_IMG":
        return { ...state, image: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  