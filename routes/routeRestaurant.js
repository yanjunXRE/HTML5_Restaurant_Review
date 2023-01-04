"use strict";
const restaurantDB= require('../models/restaurantDB');
var restaurantDBObject = new restaurantDB();
function routeRestaurant(app){

    app.route('/restaurant')
        .get(restaurantDBObject.getAllRestaurant);
    app.route('/restaurant/:restaurant') 
    . get(restaurantDBObject.getSpeRestaurant);  
}
module.exports={routeRestaurant};