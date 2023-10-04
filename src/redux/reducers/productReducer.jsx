import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
};

const productReducer = (state = initialState, action) => {
    const selectProduct = state.cart.find((product) => product._id === action.payload._id)
    console.log(selectProduct);
    switch (action.type) {
        case ADD_TO_CART:
            if(selectProduct){
                const newCart = state.cart.filter((product) => product._id !== selectProduct._id)
                selectProduct.quantity = selectProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            };
        case REMOVE_FROM_CART:
            if(selectProduct.quantity > 1){
                const newCart = state.cart.filter((product) => product._id !== selectProduct._id)
                selectProduct.quantity = selectProduct.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selectProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== action.payload._id)
            };

        default:
            return state;
    }
}
export default productReducer;