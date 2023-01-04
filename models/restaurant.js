"use strict"

class restaurant{
    constructor(id,restaurant,image,video,type,location,promo){
        this.id=id;
        this.restaurant= restaurant;
        this.image=image;
        this.video=video;
       this.type=type;
       this.location=location;
       this.promo=promo;
    }
    //create get method
    getId(){
    return this.id;
    }
    getRestaurant(){
        return this.restaurant;
    }
    getImage(){
        return this.image;
    }
    getVideo(){
        return this.video;
    }
   getType(){
       return this.type;
   }
getLocation(){
    return this.location;
}
getPromo(){
    return this.promo;
}
}
module.exports=restaurant;