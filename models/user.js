"use strict"
class user{
constructor(id,username,email,mobileNo,password,image,address){
    this.id=id;
    this.username=username;
    this.email=email;
  
    this.mobileNo =mobileNo;
    
    this.password= password;
    this.image= image;
    this.address=address;
}
//create the GET command
getId(){
    return this.id;
}
getUsername(){
    return this.username;
}
getEmail(){
    return this.email;
}

getMobileNo(){
    return this.mobileNo;
}

getPassword(){
    return this.password;
}
getImage(){
    return this.image;
}
getAddress(){
    return this.address;
}
//create set methods
setUsername(username){
    this.username =username;
}
setEmail(email){
    this.email=email;
}
setMobileNo(mobileNo){
    this.mobileNo=mobileNo;
}

setPassword(password){
    this.password =password;
}
setImage(image){
    this.image =image;
}
setAddress(address){
    this.address=address;
}
}
module.exports=user;