import { combineReducers } from 'redux';
import auth0 from 'redux/auth0/auth0';
import products from 'redux/product/product';
import car from 'redux/car/car';
import itemCar from 'redux/car/itemCar';
import numberCar from 'redux/car/numberData';

import partner from 'redux/partner/partner';
import itemPartner from 'redux/partner/itemPartner';
import numberDataPartner from 'redux/partner/numberDataPartner';

import orders from 'redux/orders/orders';
import itemOrders from 'redux/orders/itemOrders';
import numberDataOrders from 'redux/orders/numberDataOrders';

import typecar from 'redux/typecar/typecar';
import itemTypecar from 'redux/typecar/itemTypecar';
import numberTypecar from 'redux/typecar/numberTypecar';

const appReducers = combineReducers({
    auth0,
    products,

    car,
    itemCar,
    numberCar,

    partner,
    itemPartner,
    numberDataPartner,

    orders,
    itemOrders,
    numberDataOrders,

    typecar,
    itemTypecar,
    numberTypecar,
});

export default appReducers;