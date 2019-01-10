import * as Types from 'redux/procedure/ActionTypes';
var number = 5;
   
const numberData = (state = number, action) => {
    switch (action.type) {
        case Types.COUNT_DATA: 
            number= action.data;
            return action.data;
        default: return state;
        }
    };

export default numberData;