import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`PartnerTenantPackage/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
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

export const reqGetListPartnerNearHire = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Query/LayDanhSachGanHetHan`, 'GET', null, accesstoken).then(res => {
            dispatch(actGetListNearHire(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actGetListNearHire = (data) => {
    return {
        type: Types.GET_PARTNER_NEAR_HIRE,
        data
    }
}

export const reqSearchPartnerTenantPackage = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`PartnerTenantPackage/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`PartnerTenantPackage/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortPartnerTenantPackage, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `PartnerTenantPackage/PagingConditionPrice/condition/pageIndex/pageSize/sortPartnerTenantPackage/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortPartnerTenantPackage=${sortPartnerTenantPackage}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_PARTNERTENANTPACKAGE,
        data
    }
}

export const reqFindPartnerTenantPackage = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`PartnerTenantPackage/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindPartnerTenantPackage(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindPartnerTenantPackage = (data) => {
    return {
        type: Types.FIND_PARTNERTENANTPACKAGE,
        data
    }
}

export const reqDeletePartnerTenantPackage = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`PartnerTenantPackage/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`PartnerTenantPackage/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeletePartnerTenantPackage(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeletePartnerTenantPackage = (data) => {
    return {
        type: Types.DELETE_PARTNERTENANTPACKAGE,
        data
    }
}

export const reqUpdatePartnerTenantPackage = (id, PartnerTenantPackage, accesstoken) => {
    return (dispatch) => {
        return callApis(`PartnerTenantPackage/Update/${id}`, 'PUT', PartnerTenantPackage, accesstoken).then(res => {
            return callApis(`PartnerTenantPackage/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdatePartnerTenantPackage(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdatePartnerTenantPackage = (data) => {
    return {
        type: Types.UPDATE_PARTNERTENANTPACKAGE,
        data
    }
}

export const reqAddPartnerTenantPackage = (PartnerTenantPackage, accesstoken) => {
    return (dispatch) => {
        return callApis(`PartnerTenantPackage/Create`, 'POST', PartnerTenantPackage, accesstoken).then(res => {
            console.log(PartnerTenantPackage);
            return callApis(`PartnerTenantPackage/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddPartnerTenantPackage(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddPartnerTenantPackage = (data) => {
    return {
        type: Types.ADD_PARTNERTENANTPACKAGE,
        data
    }
}
