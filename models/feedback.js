"use strict"
class Comment{
constructor(id,name,email,comment){
    this.id=id;
    this.name=name;
    this.email=email;
  
    this.comment =comment;
    

}
//create the GET command
getId(){
    return this.id;
}
getName(){
    return this.name;
}
getEmail(){
    return this.email;
}

getComment(){
    return this.comment;
}


//create set methods
setName(name){
    this.name =name;
}
setEmail(email){
    this.email=email;
}
setComment(comment){
    this.comment=comment;
}

}
module.exports=Comment;