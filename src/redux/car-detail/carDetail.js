import * as Types from 'redux/car-detail/ActionTypes';
var init = {};
   
const carDetail = (state = init, action) => {
    switch (action.type) {
        case Types.LOAD_DETAIL_CAR:
            return action.carDetail;
            // return {...state,listProduct:action.listProduct};
            default: return state;
        }
    };

export default carDetail;