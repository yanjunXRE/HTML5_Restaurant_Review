function postFeed(){
    var name=document.getElementById('name');
    var email = document.getElementById('yourem');
    var feedback=document.getElementById('feedback');
    var FeedObj= new Object();
    FeedObj.name = name.value;
    FeedObj.email = email.value;
    console.log(email.value);
    console.log(FeedObj.email);
    FeedObj.comment = feedback.value;
    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", feed_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function() {
        fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
// Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(FeedObj)); 
alert("Feedback inserted");
}