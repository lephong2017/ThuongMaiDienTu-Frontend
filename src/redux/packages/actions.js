import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Package/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
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
export const reqSearchPackage = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Package/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`Package/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortPackage, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `Package/PagingConditionPrice/condition/pageIndex/pageSize/sortPackage/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortPackage=${sortPackage}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_PACKAGE,
        data
    }
}

export const reqFindPackage = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Package/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindPackage(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindPackage = (data) => {
    return {
        type: Types.FIND_PACKAGE,
        data
    }
}

export const reqDeletePackage = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Package/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Package/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeletePackage(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeletePackage = (data) => {
    return {
        type: Types.DELETE_PACKAGE,
        data
    }
}

export const reqUpdatePackage = (id, Package, accesstoken) => {
    return (dispatch) => {
        return callApis(`Package/Update/${id}`, 'PUT', Package, accesstoken).then(res => {
            return callApis(`Package/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdatePackage(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdatePackage = (data) => {
    return {
        type: Types.UPDATE_PACKAGE,
        data
    }
}

export const reqAddPackage = (Package, accesstoken) => {
    return (dispatch) => {
        return callApis(`Package/Create`, 'POST', Package, accesstoken).then(res => {
            console.log(Package);
            return callApis(`Package/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddPackage(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddPackage = (data) => {
    return {
        type: Types.ADD_PACKAGE
        ,
        data
    }
}
