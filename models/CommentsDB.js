"use strict";
var db = require("../db-connection");
const Comment = require("../models/Comment");
class CommentsDB{
    getAllComments(request,response){
        var sql= "SELECT review.id,review.review,review.rating,review.datePosted,review.restaurant_id,review.user_id,restaurant.restaurant,user.username,user.image from ((dbcitra.review INNER JOIN dbcitra.restaurant ON dbcitra.review.restaurant_id = dbcitra.restaurant.id) INNER JOIN dbcitra.user ON dbcitra.review.user_id = dbcitra.user.id)  ORDER BY review.rating DESC, user.username";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }else{}
            response.json(result);
        });
    }
    addComment(request,respond){
        
        var now = new Date();
        var commentObject = new Comment(null,request.body.restaurant_id,request.body.user_id,request.body.review,request.body.rating,now.toISOString());
        var sql = "INSERT INTO dbcitra.review(restaurant_id,user_id,review,rating,datePosted) VALUES(?,?,?,?,?)"
        var values = [commentObject.getRestaurantId(),commentObject.getUserId(),commentObject.getReview(),commentObject.getRating(),commentObject.getDatePosted()];
        console.log(commentObject.getRestaurantId());
        db.query(sql,values,function(error,result){
            if(error){
                throw error;
            }else{
            respond.json(result);
            }
        });
    
    }
    updateComment(request,respond){
        var now = new Date();
        var commentObject = new Comment(request.params.id,request.body.restaurant_id,request.body.user_id,request.body.review,request.body.rating,now.toISOString());
    var sql ="Update dbcitra.review set review = ?,rating =?,datePosted=? WHERE id = ? ";
    var values = [commentObject.getReview(),commentObject.getRating(),commentObject.getDatePosted(),commentObject.getId()];
    db.query(sql,values,function(error,result){
        if(error){
            throw error;
        }else{
        respond.json(result);
        }
    });
    }
    deleteComment(request,respond){
        var commentID= [request.params.id,request.params.userid];
        if(commentID[0]!=null){
        var sql = "DELETE FROM dbcitra.review WHERE id =?";
        db.query(sql,commentID[0],function(error,result){
            if(error){
                throw error;
            }else{
            respond.json(result);
            }
        });
        }else{
            var sql = "DELETE FROM dbcitra.review WHERE user_id='"+commentID[1]+"'";
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
module.exports =CommentsDB;