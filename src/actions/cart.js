export const addToCart = obj => {
   return {
      type: 'ADD_TO_CART',
      payload: obj
   }
}

export const removeFromCart = bookId => ({
   type: 'REMOVE_FROM_CART',
   payload: bookId
})