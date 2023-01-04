"use strict"
var db = require('../db-connection');
class restaurantDB{
getAllRestaurant(request,respond){
    var sql="SELECT * from dbcitra.restaurant";
    db.query(sql,function(error,result){
        if(error){
            throw error;
        }else{
            respond.json(result);
        }
    });
}
getSpeRestaurant(request,respond){

    var commentObject = request.params.restaurant;
    if(commentObject == "%%"){
        var sql="SELECT * from dbcitra.restaurant";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }else{
                respond.json(result);
            }
        });
    }else{
    var sql="SELECT * from dbcitra.restaurant WHERE restaurant Like '%"+commentObject+"%' OR type = '"+commentObject+"' OR location = '"+commentObject+"'";
    db.query(sql,function(error,result){
        if(error){
            throw error;
        }else{
            respond.json(result);
        }
    });
    }
    
}
}
module.exports=restaurantDB;