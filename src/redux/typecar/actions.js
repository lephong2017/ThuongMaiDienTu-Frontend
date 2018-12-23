import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`TypeCar/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
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
export const reqSearchTypecar = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
         callApis(`TypeCar/CountCondition/condition?condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actCountData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
        return callApis(`TypeCar/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`TypeCar/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}



export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_TYPECAR,
        data
    }
}

export const reqFindTypecar = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`TypeCar/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindTypecar(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindTypecar = (data) => {
    return {
        type: Types.FIND_TYPECAR,
        data
    }
}

export const reqDeleteTypecar = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Typecar/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Typecar/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeleteTypecar(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeleteTypecar = (data) => {
    return {
        type: Types.DELETE_TYPECAR,
        data
    }
}

export const reqUpdateTypecar = (id, Typecar, accesstoken) => {
    return (dispatch) => {
        return callApis(`Typecar/Update/${id}`, 'PUT', Typecar, accesstoken).then(res => {
            console.log("edit");
            return callApis(`Typecar/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdateTypecar(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdateTypecar = (data) => {
    return {
        type: Types.UPDATE_TYPECAR,
        data
    }
}

export const reqAddTypecar = ( Typecar, accesstoken) => {
    return (dispatch) => {
        return callApis(`Typecar/Create`, 'POST', Typecar, accesstoken).then(res => {
            // console.log(res.data);
            return callApis(`Typecar/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddTypecar(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddTypecar = (data) => {
    return {
        type: Types.ADD_TYPECAR,
        data
    }
}
