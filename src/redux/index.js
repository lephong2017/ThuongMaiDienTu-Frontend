import { combineReducers } from 'redux';
import auth0 from 'redux/auth0/auth0';
import car from 'redux/car/car';
import carDetail from 'redux/car-detail/carDetail';
import itemCar from 'redux/car/itemCar';
import numberCar from 'redux/car/numberData';

import carPartner from 'redux/carPartner/carPartner';
import itemCarPartner from 'redux/carPartner/itemCarPartner';
import numberCarPartner from 'redux/carPartner/numberDataPartner';

import partner from 'redux/partner/partner';
import itemPartner from 'redux/partner/itemPartner';
import numberDataPartner from 'redux/partner/numberDataPartner';

import orders from 'redux/orders/orders';
import itemOrders from 'redux/orders/itemOrders';
import numberDataOrders from 'redux/orders/numberDataOrders';

import ordersPartner from 'redux/ordersPartner/ordersPartner';
import itemOrdersPartner from 'redux/ordersPartner/itemOrdersPartner';
import numberDataOrdersPartner from 'redux/ordersPartner/numberDataOrdersPartner';

import typecar from 'redux/typecar/typecar';
import itemTypecar from 'redux/typecar/itemTypecar';
import numberTypecar from 'redux/typecar/numberTypecar';

import customer from 'redux/customer/customer';
import itemCustomer from 'redux/customer/itemCustomer';
import numberCustomer from 'redux/customer/numberCustomer';


//#endregion
import feature from 'redux/feature/feature';
import itemFeature from 'redux/feature/itemFeature';
import numberFeature from 'redux/feature/numberFeature';

import location from 'redux/location/location';
import itemLocation from 'redux/location/itemLocation';
import numberLocation  from 'redux/location/numberLocation';
//#endregion
import packages from 'redux/packages/packages';
import itemPackages from 'redux/packages/itemPackages';
import numberPackages  from 'redux/packages/numberPackages';

import payment from 'redux/payment/payment';
import itemPayment from 'redux/payment/itemPayment';
import numberPayment  from 'redux/payment/numberPayment';
//#endregion
import procedure from 'redux/procedure/procedure';
import itemProcedure from 'redux/procedure/itemProcedure';
import numberProcedure  from 'redux/procedure/numberProcedure';

import partnerHire  from 'redux/partnerPackage/partnerHire';
import partnerPackage from 'redux/partnerPackage/partnerPackage';
import itemPartnerPackage from 'redux/partnerPackage/itemPartnerPackage';
import numberPartnerPackage  from 'redux/partnerPackage/numberPartnerPackage';
const appReducers = combineReducers({
    auth0,

    car,
    carDetail,
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
    
    customer, 
    itemCustomer, 
    numberCustomer,
   
    //#endregion
    feature,
    itemFeature,
    numberFeature,
    //#endregion
    location,
    itemLocation,
    numberLocation,
    //#endregion
    packages,
    itemPackages,
    numberPackages,
    //#endregion
    payment,
    itemPayment,
    numberPayment,
    //#endregion
    procedure,
    itemProcedure,
    numberProcedure,
    //#endregion
    partnerPackage,
    partnerHire,
    itemPartnerPackage,
    numberPartnerPackage,

    //car partner
    carPartner, itemCarPartner, numberCarPartner,

    //order partner
    ordersPartner, itemOrdersPartner, numberDataOrdersPartner
});


export default appReducers;