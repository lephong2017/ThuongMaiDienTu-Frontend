import * as Types from './ActionTypes';
var email = [];
   
const sendMail = (state = email, action) => {
    switch (action.type) {
        case Types.SEND_EMAIL: 
            return action.data;
        case Types.SEND_GROUP_EMAIL: 
            return action.data;
        default: return state;
        }
    };

export default sendMail;