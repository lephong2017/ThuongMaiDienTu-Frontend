import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Partner/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
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
export const reqSearchPartner = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
         callApis(`Partner/CountCondition/condition?condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actCountData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
        return callApis(`Partner/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`Partner/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}



export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_PARTNER,
        data
    }
}

export const reqFindPartner = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Partner/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindPartner(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindPartner = (data) => {
    return {
        type: Types.FIND_PARTNER,
        data
    }
}

export const reqDeletePartner = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Partner/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Partner/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeletePartner(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeletePartner = (data) => {
    return {
        type: Types.DELETE_PARTNER,
        data
    }
}

export const reqUpdatePartner = (id, Partner, accesstoken) => {
    return (dispatch) => {
        return callApis(`Partner/Update/${id}`, 'PUT', Partner, accesstoken).then(res => {
            console.log("edit");
            return callApis(`Partner/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdatePartner(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdatePartner = (data) => {
    return {
        type: Types.UPDATE_PARTNER,
        data
    }
}

export const reqAddPartner = ( Partner, accesstoken) => {
    return (dispatch) => {
        return callApis(`Partner/Create`, 'POST', Partner, accesstoken).then(res => {
            // console.log(res.data);
            return callApis(`Partner/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddPartner(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddPartner = (data) => {
    return {
        type: Types.ADD_PARTNER,
        data
    }
}
