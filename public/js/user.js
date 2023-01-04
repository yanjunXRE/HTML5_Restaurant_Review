var loadFile = function(event) {
	var image = document.getElementById('output');
        
	image.src = URL.createObjectURL(event.target.files[0]);
};
function myFunction(){
    var x = document.getElementById("file");
    var txt = "";
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
        for (var i = 0; i < x.files.length; i++) {
          var file = x.files[i];
          if ('name' in file) {
            txt += file.name;
            console.log(txt);
          }
         
        }
      }
    } 
    else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
      }
    }
    if(txt!= "Select one or more files."){
    document.getElementById('image').value = txt;
    }
  }
var user = sessionStorage.getItem("user");
var imgProfile=sessionStorage.getItem("img");
console.log(user);
console.log(imgProfile);
    var title= document.getElementById('login');
   
    if(user == null){
        title.innerHTML="Login";
    }else{
        title.innerHTML="<img width='30' height='30' src='css/image/upload/"+imgProfile+"'>   "+ user;
        
    }

function logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('img');
}

function forgot(){
    loadUserData()
    var count = 0;
    var username= document.getElementById('forgotuname');
    totalUser = user_array.length;    
    while (count < totalUser){  
        if(username.value == user_array[count].username){
           
            var password = document.getElementById('forgotpsw');
           
            var user = new Object();
           
            
        
        
           
            user.password = password.value;
        user.username=username.value;
        if(user.password!=""){
            alert("Password changed");
            var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment
        
            postComment.open("PUT", forgot_url+"/"+user_array[count].id, true); //Use the HTTP POST method to send data to server
        
            postComment.setRequestHeader("Content-Type", "application/json");
            postComment.onload = function() {
                loadUserData(); // fetch all comments again so that the web page can have updated comments.     
            };
        // Convert the data in Comment object to JSON format before sending to the server.
        
        postComment.send(JSON.stringify(user)); 
        break;
        }else{
            event.preventDefault();
            alert("Password cannot changed.Password cannot empty");
            break;
        }
        }else{
            count++;
        }
    }
    if(count==totalUser){
        event.preventDefault();
        alert("Password cannot changed:User cannot be found");
    }
    
    
   
}
function deleteUSer(usernames) {
    
   
    var response = confirm("Are you sure you want to delete this user?");

    if (response == true) {
       //get the current item
      
       var delete_comment_url = "commentUser/" + sessionStorage.getItem("id");
 var eraseComment = new XMLHttpRequest();
 eraseComment.open("DELETE", delete_comment_url, true);
 eraseComment.onload = function() {
    var delete_user_url = user_url + "/" + usernames;
 var eraseUser = new XMLHttpRequest();
 eraseUser.open("DELETE", delete_user_url, true);
 eraseUser.onload = function() {
     loadUserData();
     
 };
 eraseUser.send();
 };
 eraseComment.send();
 sessionStorage.removeItem('user');
 sessionStorage.removeItem('id');
 sessionStorage.removeItem('img');

    
}
}
function updated(usernames){
    var count = 0;
    totalUser = user_array.length;    
    while (count < totalUser){  
        if(usernames == user_array[count].id){
            break;
        }else{
            count++;
        }
    }
    var username= document.getElementById('uname3');
    var password = document.getElementById('psw3');
    var email = document.getElementById('email2');
    var mobileNo = document.getElementById('mobileNo2');
    var address= document.getElementById('address');
    var user = new Object();
   var image= document.getElementById('image');
    


    user.address= address.value
    user.password = password.value;
user.username=username.value;
    user.email=email.value;
    user.mobileNo=mobileNo.value;
    
    if(image.value !="" || image.value !=null || image.value != undefined){
    user.image=image.value;
    sessionStorage.setItem('img', user.image);
    }
    if(user.email != "" && user.mobileNo != ""&&user.password!=""){
        alert("Account updated");
        
   

        var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment
    
        postComment.open("PUT", user_url+"/"+usernames, true); //Use the HTTP POST method to send data to server
    
        postComment.setRequestHeader("Content-Type", "application/json");
        postComment.onload = function() {
            loadUserData(); // fetch all comments again so that the web page can have updated comments.     
        };
    // Convert the data in Comment object to JSON format before sending to the server.
    
    postComment.send(JSON.stringify(user)); 
    }else if(user.email == null){
        event.preventDefault();
        alert("Cannot register.Reason:Email not the same or empty");
    }else if(user.mobileNo == null){
        event.preventDefault();
        alert("Cannot register.Reason:MobileNo not the same or empty");
    }
    else if(user.password!=user.confirm && user.password == ""){
       
    
        event.preventDefault();
        alert("Cannot register.Reason:Password not the same or empty");
    
    }
}
function review(id){
    fetchComments();
    console.log(comment_array);
    console.log(id);
    
            document.getElementById("commentBody").textContent = "";
          
    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].user_id==id) {
            document.getElementById("review").textContent = "Review by " + comment_array[i].username;
            document.getElementById("emptyComment").innerHTML = "";
            selectedMovieId = comment_array[i].user_id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <small>for " + comment_array[i].restaurant + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/popcorn.png' style='width:50px' />";
            }
            star += "<img src='images/delete.png' class='edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' />";
            star += "<img src='images/edit.png' class='edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal'item='"
		 + i + "' onClick='editComment(this)' />";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}
function getAccount(usernames){
    loadUserData();
    console.log(usernames);
  var count = 0;
  totalUser = user_array.length;    
  while (count < totalUser){  
      if(usernames == user_array[count].id){
          break;
      }else{
          count++;
      }
  }
    var username= document.getElementById('uname3');
    var password = document.getElementById('psw3');
    var email = document.getElementById('email2');
    var mobileNo = document.getElementById('mobileNo2');
    var confirm= document.getElementById('address');
    var image= document.getElementById('output');
    var imagetxt = document.getElementById('image');
   
  
       
             username.value=user_array[count].username;
            email.value  =user_array[count].email ;
            password.value = user_array[count].password;
            mobileNo.value =  user_array[count].mobileNo;
             confirm.value = user_array[count].address ;
             imagetxt.value=user_array[count].image;
              image.src= 'css/image/upload/'+user_array[count].image ;
        
       
    
}
function loginPage(){
    
    var title= document.getElementById('login');
   // title.innerHTML=loginTitle;
    if(title.innerHTML == "Login"){
        document.getElementById('id01').style.display='block',loadUserData();
    }else{
        document.getElementById('id04').style.display='block',loadUserData();
    }
}
function loadUserData(){
var request = new XMLHttpRequest();
    request.open('GET', user_url, true);

    //This function will be called when data returns from the web api
    request.onload = function() {
    //get all the movies records into our movie array
    user_array = JSON.parse(request.responseText);
    console.log(user_array.username);
  
};
    //This command starts the calling of the movies web api
    request.send();

}
function login(){
    var count= 0;
    var username= document.getElementById('uname');
    var password = document.getElementById('psw');
   
    
    totalUser = user_array.length;    
    while (count < totalUser){  
if(user_array[count].username == username.value && user_array[count].password == password.value){
    document.getElementById('invalid').style.display='none';
    loginTitle =username.value;
    sessionStorage.setItem("user",loginTitle);
    sessionStorage.setItem("id",user_array[count].id);
    sessionStorage.setItem("img",user_array[count].image);
    alert("Welcome, "+loginTitle);
    title.innerHTML=loginTitle;
    break;
}else{
    count++;
}
if(count == totalUser){
    event.preventDefault();
   alert("Wrong password or username");
   
}
}
}
function register(){
    var count= 0;
    var username= document.getElementById('uname2');
    var password = document.getElementById('psw2');
    var email = document.getElementById('email');
    var mobileNo = document.getElementById('mobileNo');
    var confirm= document.getElementById('ConPsw');
    var user = new Object();
    user.username = username.value;
    user.confirm= confirm.value
    user.password = password.value;

    user.email=email.value;
    user.mobileNo=mobileNo.value;
    loadUserData();

console.log(user.username);
totalUser = user_array.length;    
    while (count < totalUser){  
if(user_array[count].username == username.value ){
    event.preventDefault();
    alert("Cannot register.Reason:User Registered or empty");
    break;
}else{
    count++;
}
    }
if(count == totalUser &&user.email != "" && user.mobileNo != ""&&user.password==user.confirm && user.password != ""){
    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", user_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function() {
     
    };
// Convert the data in Comment object to JSON format before sending to the server.

alert("User registered");
postComment.send(JSON.stringify(user)); 
}else if(user.email == null){
    alert("Cannot register.Reason:Email not the same or empty");
}else if(user.mobileNo == null){
    alert("Cannot register.Reason:MobileNo not the same or empty");
}
else if(user.password!=user.confirm||user.password == "" ){
   
    alert("Cannot register.Reason:Password not the same or empty");
    event.preventDefault();
   

}

    
}
