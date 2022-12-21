const INIT_STATE = {
    carts : [] //1, 2, 3
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case 'ADD_CART':
            const ItemIndex = state.carts.findIndex((items) => items.id === action.payload.id)
            if(ItemIndex >= 0){
              state.carts[ItemIndex].qnty += 1
            }
            else{
               const temp = {...action.payload, qnty:1}
               return{
                ...state,
                carts: [...state.carts, temp]
               }
            }
        
        case 'REMOVE_CART':
            const data = state.carts.filter((e)=>e.id !== action.payload); //1 !== 1
            return {
                ...state,
                carts : data
            }
             
        case 'REMOVE_ONE':
            const ItemIndex_dec =  state.carts.findIndex((items) => items.id === action.payload.id)
            if(state.carts[ItemIndex_dec].qnty >= 1){
              const dltItems = state.carts[ItemIndex_dec].qnty -= 1
              console.log([...state.carts, dltItems])
              return{
                ...state,
                carts: [...state.carts]
              }
            }else if(state.carts[ItemIndex_dec].qnty === 1){
                  const data = state.carts.filter((el) =>  el.id !== action.payload)
            return {
              ...state,
              carts:data
            }
          }
              
        default:
            return state
    }
}