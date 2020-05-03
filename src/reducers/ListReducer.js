const defaultState = null;

const reducer =  (state = defaultState, action) => {
 switch (action.type) {
  case 'CATS_LIST':
   return {
    ...state,
    catsList: action.payload
   }
  default:
   return state
 }
}

export default reducer;
