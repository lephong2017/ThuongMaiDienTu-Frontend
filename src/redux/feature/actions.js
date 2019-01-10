import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Feature/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
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
export const reqSearchFeature = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Feature/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`Feature/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortFeature, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `Feature/PagingConditionPrice/condition/pageIndex/pageSize/sortFeature/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortFeature=${sortFeature}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_FEATURE,
        data
    }
}

export const reqFindFeature = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Feature/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindFeature(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindFeature = (data) => {
    return {
        type: Types.FIND_FEATURE,
        data
    }
}

export const reqDeleteFeature = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Feature/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Feature/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeleteFeature(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeleteFeature = (data) => {
    return {
        type: Types.DELETE_FEATURE,
        data
    }
}

export const reqUpdateFeature = (id, Feature, accesstoken) => {
    return (dispatch) => {
        return callApis(`Feature/Update/${id}`, 'PUT', Feature, accesstoken).then(res => {
            return callApis(`Feature/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdateFeature(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdateFeature = (data) => {
    return {
        type: Types.UPDATE_FEATURE,
        data
    }
}

export const reqAddFeature = (Feature, accesstoken) => {
    return (dispatch) => {
        return callApis(`Feature/Create`, 'POST', Feature, accesstoken).then(res => {
            console.log(Feature);
            return callApis(`Feature/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddFeature(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddFeature = (data) => {
    return {
        type: Types.ADD_FEATURE,
        data
    }
}
