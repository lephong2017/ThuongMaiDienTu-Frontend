import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Car/CountAllPagingConditionGetByEmail`, 'GET', null, accesstoken).then(res => {
             dispatch(actCountData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actCountData = (data) => {
    return {
        type: Types.COUNT_DATA_CAR_PARTNER,
        data
    }
}
export const reqSearchCar = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Car/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    
    return (dispatch) => {
        return callApis(`Car/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_CAR_PARTNER,
        data
    }
}

export const reqFindCar = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Car/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindCar(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindCar = (data) => {
    return {
        type: Types.FIND_CAR_PARTNER,
        data
    }
}

export const reqDeleteCar = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Car/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Car/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeleteCar(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeleteCar = (data) => {
    return {
        type: Types.DELETE_CAR_PARTNER,
        data
    }
}

export const reqUpdateCar = (id, Car, accesstoken) => {
    return (dispatch) => {
        return callApis(`Car/Update/${id}`, 'PUT', Car, accesstoken).then(res => {
            return callApis(`Car/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdateCar(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdateCar = (data) => {
    return {
        type: Types.UPDATE_CAR_PARTNER,
        data
    }
}

export const reqAddCar = ( Car, accesstoken) => {
    return (dispatch) => {
        return callApis(`Car/Create`, 'POST', Car, accesstoken).then(res => {
            console.log(res.data);
            return callApis(`Car/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddCar(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddCar = (data) => {
    return {
        type: Types.ADD_CAR_PARTNER,
        data
    }
}

