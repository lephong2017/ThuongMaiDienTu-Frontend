import *as Type from 'redux/product/ActionTypes';
export const  loadProductAct =()=>{
    return (dispatch)=>{
        
       return dispatch(fecthProduct());
    }
}
export const fecthProduct=()=>{
    return {
        type:Type.LOAD_PRODUCT,
        action:{}
    }
}