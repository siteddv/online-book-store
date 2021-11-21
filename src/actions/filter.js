export const setFilter = filterCriteria => ({
   type: 'SET_FILTER',
   payload: filterCriteria
})

export const setSearchQuery = query => ({
   type: 'SET_SEARCH_QUERY',
   payload: query
})