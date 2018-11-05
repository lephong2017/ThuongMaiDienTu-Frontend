import * as ActionTypes from 'redux/car/ActionTypes';
import * as methodType from 'actions/management/MethodType';
import * as enpointAPI from './endpointAPI';
import {ACCESS_TOKEN} from 'settings/sessionStorage';
export const loadObj={
    methodType:methodType.INFO_API,
    endpointAPI:enpointAPI.GET_CAR,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    objectLoadData:{

    },
    ActionType:ActionTypes.LOAD_CAR
}
export const addObj={
    methodType:methodType.ADD_API,
    endpointAPI:enpointAPI.ADD_CAR,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.LOAD_CAR
}
export const delObj={
    methodType:methodType.DELETE_API,
    endpointAPI:enpointAPI.DELETE_CAR,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.LOAD_CAR
}
export const updateObj={
    methodType:methodType.UPDATE_API,
    endpointAPI:enpointAPI.UPDATE_CAR,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.LOAD_CAR
}
export const findObj={
    methodType:methodType.FIND_API,
    endpointAPI:enpointAPI.FIND_CAR,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.FIND_CAR
}
export const searchObj={
    methodType:methodType.FIND_API,
    endpointAPI:enpointAPI.FIND_CAR,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.FIND_CAR
}