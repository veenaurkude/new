const initialState = {};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BUTTON':
      return {
        ...state,
        [action.payload.name]: action.payload.count,
      };
    default:
      return state;
  }
};

export default buttonReducer;