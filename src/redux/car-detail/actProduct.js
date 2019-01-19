import callApis from 'utils/callAPI/apiCaller';
import {callApiNotToken} from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';
export const loadDataDetailOfCar = (id, accesstoken) => {
    return (dispatch) => {
        return callApiNotToken(`CustomerOrderJoin/Join?idCar=${id}`, 'GET', null, accesstoken).then(res => {
            const arrFeature= res.data.feature.split('*');
            arrFeature.pop();
            const arrProcedure= res.data.procedure.split('*');
            arrProcedure.pop();

            var detail = {
                name: res.data.name,
                price: res.data.price,
                feature: arrFeature,
                procedure: arrProcedure
            }
            dispatch(actLoadDataDatailOfCar(detail));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataDatailOfCar = (carDetail) => {
    return {
        type: Types.LOAD_DETAIL_CAR,
        carDetail
    }
}