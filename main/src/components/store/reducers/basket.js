export const Basket = (state,action) =>{
    switch (action.type) {
        case ADD_TO_BASKET:
            return [...state, action.payload];
            case REMOVE_TO_BASKET:
                 return state.filter(e=> e.id!== action.payload)
            break;
    
        default: state
            break;
    }
}