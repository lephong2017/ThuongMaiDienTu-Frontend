import { combineReducers } from 'redux';
import auth0 from 'redux/auth0/auth0';
import products from 'redux/product/product';
import car from 'redux/car/car';
import itemCar from 'redux/car/itemCar';
import numberCar from 'redux/car/numberData';

import partner from 'redux/partner/partner';
import itemPartner from 'redux/partner/itemPartner';
import numberPartner from 'redux/partner/numberDataPartner';

const appReducers = combineReducers({
    auth0,
    products,

    car,
    itemCar,
    numberCar,

    partner,
    itemPartner,
    numberPartner
});

export default appReducers;