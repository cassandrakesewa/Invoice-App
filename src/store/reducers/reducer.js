import * as actionTypes from '../actions/actionTypes';

const intitialState = {
    productInfo: []
}

const reducer = (state = intitialState, action) => {
    switch(action.type){
        case actionTypes.ADD_PRODUCT_DETAILS:
        return{
            ...state,
            productInfo:state.productInfo.concat(action.productInfo)
        }
        case actionTypes.FETCH_ADDED_PRODUCT_DETAILS:
        return{
            ...state
        }
        default:
        return state
    }
}

export default reducer;