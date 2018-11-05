import * as Types from 'redux/auth0/ActionTypes';
var auth0 ={
   listCar:[]
};
   
const car = (state = auth0, action) => {
    switch (action.type) {
        case Types.LOAD_CAR: 
            return {...state,listCar:action.listCar};
        default: return {...state};
        }
    };

export default auth0;