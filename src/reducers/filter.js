const initialState = {
   searchQuery: '',
   filterCriteria: 'all'
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'SET_FILTER':
         return {
            ...state,
            filterCriteria: action.payload
         };
      case 'SET_SEARCH_QUERY':
         return {
            ...state,
            searchQuery: action.payload
         };
      default:
         return state;
   }
};