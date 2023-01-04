"use strict";
var db = require("../db-connection");
const user = require("./user");
class userDB{
    getAllUser(request,response){
        var sql= "SELECT * from dbcitra.user";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }else{}
            response.json(result);
        });
    }
    addUser(request,respond){
        

        var commentObject = new user(null,request.body.username,request.body.email,request.body.mobileNo,request.body.password);
        var sql = "INSERT INTO dbcitra.user(username,email,mobileNo,password) VALUES(?,?,?,?)"
        var values = [commentObject.getUsername(),commentObject.getEmail(),commentObject.getMobileNo(),commentObject.getPassword()];
       
        db.query(sql,values,function(error,result){
            if(error){
                throw error;
            }else{
            respond.json(result);
            }
        });
    
    }
    updateUser(request,respond){
        var now = new Date();
        var commentObject = new user(request.params.id,request.body.username,request.body.email,request.body.mobileNo,request.body.password,request.body.image,request.body.address);
    var sql ="Update dbcitra.user set username = ?,email =?,mobileNo=?,password=?,image=?,address=? WHERE id = ?";
    var values = [commentObject.getUsername(),commentObject.getEmail(),commentObject.getMobileNo(),commentObject.getPassword(),commentObject.getImage(),commentObject.getAddress(),commentObject.getId()];
    db.query(sql,values,function(error,result){
        if(error){
            throw error;
        }else{
        respond.json(result);
        }
    });
    }
    updatePass(request,respond){
    
        var commentObject = new user(request.params.id,null,null,null,request.body.password);
    var sql ="Update dbcitra.user set password=? WHERE id = ?";
    var values = [commentObject.getPassword(),commentObject.getId()];
    db.query(sql,values,function(error,result){
        if(error){
            throw error;
        }else{
        respond.json(result);
        }
    });
    }
    deleteUser(request,respond){
        var commentID= request.params.id;
        var sql = "DELETE FROM dbcitra.user WHERE id =?";
        db.query(sql,commentID,function(error,result){
            if(error){
                throw error;
            }else{
            respond.json(result);
            }
        });
    }
}
module.exports =userDB;