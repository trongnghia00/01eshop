export const initState = {
    basket: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_CART':
            const index = state.basket.findIndex(
                (item) => item.id === action.id
            );
            let newCart = [...state.basket];
            if (index>=0) {
                newCart.splice(index, 1);
            } else {
                console.warn('Sản phẩm không tồn tại trong giỏ hàng');
            }

            return {
                ...state,
                basket: newCart    
            }
        default: 
            return state;
    }
}

export default reducer;