import * as Types from './ActionTypes';
var sendmail = [];
   
const mail = (state = sendmail) => {
    switch (action.type) {
        case Types.SENDMAIL: 
            return action.data;
        
        default: return state;
        }
    };

export default mail;