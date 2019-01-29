import * as actionTypes from './actionTypes';

export const addProductDetails = (productInfo) => {
    return{
        type:actionTypes.ADD_PRODUCT_DETAILS,
        productInfo
    }
}

export const fetchAddedProductDetails = () => {
    return{
        type:actionTypes.FETCH_ADDED_PRODUCT_DETAILS,
    }
}