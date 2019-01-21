import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';
import {callApiNotToken} from 'utils/callAPI/apiCaller';

export const reqSendMail = (email, content, accesstoken) => {

    let contentMail ='<html> <h1>Xin chào ';
    contentMail = contentMail + content.nameCustomer +'</h1>';
    contentMail = contentMail + '<br/><span> Chúc mừng bạn đã đặt hàng thành công, mã đơn hàng của bạn là: ' + content.nameCar +'</span>';
    contentMail = contentMail + '<br/><span> Tổng trị giá đơn hàng của bạn là: ' + content.priceOrder +' USD </span>';
    contentMail = contentMail + '<br/><span> Ngày bắt đầu thuê xe là: ' +content.dateOfhire +'</span>';
    contentMail = contentMail + '<br/><span> Ngày bạn trả xe là: ' + content.carReturnDay +'</span>';
    contentMail = contentMail + '<br/><span> Chủ xe sẻ sớm liên hệ với bạn để giao xe. Chúc bạn có chiến đi vui vẻ!!! ' +'</span>';
    contentMail = contentMail + '</html>';

    return (dispatch) => {
        return callApiNotToken(`SendMail/sendMail?email=${email}&contentBody=${contentMail}`, 'GET', null, accesstoken).then(res => {
            dispatch(actSendmail(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actSendmail = (data) => {
    return {
        type: Types.SEND_EMAIL,
        data
    }
}

export const reqSendGroupMail = (listemail, accesstoken) => {
    // let list = '';
    // let i=0;
    // for(i=0 ; i < listemail.length ; i++){
    //     list= list+'*';
    // }
    return (dispatch) => {
        return callApis(`SendMail/sendMailCanhBaoHetHan/listEmail?listEmail=${listemail}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);
            dispatch(actSendgroupMail(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const actSendgroupMail = (data) => {
    return {
        type: Types.SEND_GROUP_EMAIL,
        data
    }
}
