import { combineReducers } from 'redux';
import auth from 'redux/auth0/auth0';
const appReducers = combineReducers({
    auth,

});

export default appReducers;