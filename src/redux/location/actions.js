import callApis from 'utils/callAPI/apiCaller';
import {callApiNotToken} from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Location/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
            dispatch(actCountData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actCountData = (data) => {
    return {
        type: Types.COUNT_DATA,
        data
    }
}

export const reqAllLocation = (accesstoken) => {
    return (dispatch) => {
        return callApiNotToken(`Location/GetAllLocation`, 'GET', null, accesstoken).then(res => {
            dispatch(actAllLocation(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAllLocation = (data) => {
    return {
        type: Types.ALL_LOCATION,
        data
    }
}

export const reqSearchLocation = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Location/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`Location/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortLocation, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `Location/PagingConditionPrice/condition/pageIndex/pageSize/sortLocation/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortLocation=${sortLocation}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_LOCATION,
        data
    }
}

export const reqFindLocation = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Location/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindLocation(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindLocation = (data) => {
    return {
        type: Types.FIND_LOCATION,
        data
    }
}

export const reqDeleteLocation = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Location/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Location/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeleteLocation(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeleteLocation = (data) => {
    return {
        type: Types.DELETE_LOCATION,
        data
    }
}

export const reqUpdateLocation = (id, Location, accesstoken) => {
    return (dispatch) => {
        return callApis(`Location/Update/${id}`, 'PUT', Location, accesstoken).then(res => {
            return callApis(`Location/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdateLocation(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdateLocation = (data) => {
    return {
        type: Types.UPDATE_LOCATION,
        data
    }
}

export const reqAddLocation = ( Location, accesstoken) => {
    return (dispatch) => {
        return callApis(`Location/Create`, 'POST', Location, accesstoken).then(res => {
            console.log(res.data);
            return callApis(`Location/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddLocation(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddLocation = (data) => {
    return {
        type: Types.ADD_LOCATION,
        data
    }
}
