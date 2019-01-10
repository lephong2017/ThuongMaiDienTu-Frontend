import * as Types from 'redux/packages/ActionTypes';
var PACKAGE ={};
   
const item = (state = PACKAGE, action) => {
    switch (action.type) {
        case Types.FIND_PACKAGE: 
            return action.data;
        default: return {...state};
        }
    };

export default item;