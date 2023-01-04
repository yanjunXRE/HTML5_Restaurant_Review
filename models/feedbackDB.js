"use strict";
var db = require("../db-connection");
const feedback = require("./feedback");
class feedbackDB{
    getAllComments(request,response){
        var sql= "SELECT * FROM dbcitra.feedback";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }else{}
            response.json(result);
        });
    }
    addComment(request,respond){
        
      
        var commentObject = new feedback(null,request.body.name,request.body.email,request.body.comment);
        var sql = "INSERT INTO dbcitra.feedback(name,email,comment) VALUES(?,?,?)"
        var values = [commentObject.getName(),commentObject.getEmail(),commentObject.getComment()];
        db.query(sql,values,function(error,result){
            if(error){
                throw error;
            }else{
            respond.json(result);
            }
        });
    
    }
    
}
module.exports =feedbackDB;