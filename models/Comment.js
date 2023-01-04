"use strict"
class Comment{
constructor(id,restaurantId,userId,review,rating,datePosted){
    this.id=id;
    this.restaurantId=restaurantId;
    this.userId=userId;
  
    this.review =review;
    
    this.rating= rating;
    this.datePosted= datePosted;
}
//create the GET command
getId(){
    return this.id;
}
getRestaurantId(){
    return this.restaurantId;
}
getUserId(){
    return this.userId;
}

getReview(){
    return this.review;
}

getRating(){
    return this.rating;
}
getDatePosted(){
    return this.datePosted;
}
//create set methods
setRestuarantId(restaurantId){
    this.restaurantId =restaurantId;
}
setUserId(userId){
    this.userId=userId;
}
setReview(review){
    this.review=review;
}

setRating(rating){
    this.rating =rating;
}
setDatePosted(datePosted){
    this.datePosted =datePosted;
}
}
module.exports=Comment;