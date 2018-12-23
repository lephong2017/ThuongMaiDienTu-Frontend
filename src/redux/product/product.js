import * as Types from './ActionTypes';
var product ={
   listProduct:[
    {
        price:'500 000',
        name:'Toyota'
    },
    {
        price:'200 000',
        name:'Toyota'
    },
    {
        price:'700 000',
        name:'Toyota'
    },
    {
        price:'200 000',
        name:'Toyota'
    },
    {
        price:'250 000',
        name:'Toyota'
    },
    {
        price:'200 000',
        name:'Toyota'
    },
   ]
};
   
const products = (state = product, action) => {
    switch (action.type) {
        case Types.LOAD_PRODUCT:
            return {...state};
            // return {...state,listProduct:action.listProduct};
            default: return {...state};
        }
    };

export default products;