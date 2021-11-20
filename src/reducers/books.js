const initialState = {
   isReady: false,
   items: null,
   filterCriteria: 'all'
}

export default (state = initialState, action) => {
   switch (action.type) {
      case 'SET_BOOKS':
         return {
            ...state,
            isReady: true,
            items: action.payload
         };
      case 'SET_FILTER':
         return {
            ...state,
            filterCriteria: action.payload
         };
      case 'SET_IS_READY':
         return {
            ...state,
            isReady: action.payload
         };
      default:
         return state;
   }
};