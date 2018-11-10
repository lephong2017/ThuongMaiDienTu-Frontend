// import * as Types from 'actions/ActionTypes';
import callApis from 'utils/callAPI/apiCallerNotToken';

// const getParamFromObject=(object)=>{
//     if(object===null) return '';
//     var param='?';
//     var keyObject=Object.keys(object);
//     var i;
//     for( i=0; i<keyObject.length; i++){
//         param+=(keyObject[i]+"="+object[keyObject[i]])+'&';
//     }
//     return param.substring(0,param.length-1);
// }
export const handleAPI=(objectParam,objectData)=>{
    switch(objectParam.methodType){
        case 'REGISTER_API':
            return actLoad(objectParam,objectData);
        case 'LOGIN_API':
            return actLoad(objectParam,objectData);
        
        default : return actLoad(objectParam,objectData);
    }
}

 const actLoad = (objectParam,objectData) => {
    return (dispatch) => {
        return callApis(objectParam.endpointAPI, 'POST', objectData).then((res) => {
            console.log(res.data);
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

