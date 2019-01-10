import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Procedure/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
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
export const reqSearchProcedure = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Procedure/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`Procedure/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortProcedure, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `Procedure/PagingConditionPrice/condition/pageIndex/pageSize/sortProcedure/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortProcedure=${sortProcedure}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_PROCEDURE,
        data
    }
}

export const reqFindProcedure = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Procedure/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindProcedure(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindProcedure = (data) => {
    return {
        type: Types.FIND_PROCEDURE,
        data
    }
}

export const reqDeleteProcedure = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Procedure/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Procedure/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeleteProcedure(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeleteProcedure = (data) => {
    return {
        type: Types.DELETE_PROCEDURE,
        data
    }
}

export const reqUpdateProcedure = (id, Procedure, accesstoken) => {
    return (dispatch) => {
        return callApis(`Procedure/Update/${id}`, 'PUT', Procedure, accesstoken).then(res => {
            return callApis(`Procedure/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdateProcedure(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdateProcedure = (data) => {
    return {
        type: Types.UPDATE_PROCEDURE,
        data
    }
}

export const reqAddProcedure = (Procedure, accesstoken) => {
    return (dispatch) => {
        return callApis(`Procedure/Create`, 'POST', Procedure, accesstoken).then(res => {
            console.log(Procedure);
            return callApis(`Procedure/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddProcedure(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddProcedure = (data) => {
    return {
        type: Types.ADD_PROCEDURE,
        data
    }
}
