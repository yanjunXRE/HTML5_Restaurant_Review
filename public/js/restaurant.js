//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function search(){
var search=document.getElementById('getFilter');
if(search.value != ""){

    category=search.value;
}else{
    category="";
}
getMovieData();
displayMovies(category);
console.log(category);
}
function getMovieData() {
    var request = new XMLHttpRequest();
    request.open('GET', movie_url+"/"+category, true);

    //This function will be called when data returns from the web api
    request.onload = function() {
    //get all the movies records into our movie array
    movie_array = JSON.parse(request.responseText);
    fetchComments();
    //call the function so as to display all movies tiles for "Now Showing"
    displayMovies(category);
    };
    //This command starts the calling of the movies web api
    request.send();
    console.log(movie_array)
}
//This function is to display the movies tiles
//that filters based on "Now Showing" or "Coming Soon“
function displayMovies(category) 
{    
    var table = document.getElementById("moviesTable");    
    var movieCount = 0;    
    var message = "";    

    table.innerHTML = "";    
    totalMovies = movie_array.length;    
    for (var count = 0; count < totalMovies; count++) 
    {      
            var thumbnail = movie_array[count].image;            
            var title = movie_array[count].restaurant;            
            var cell = '<div class="col-xl-3 col-lg-4 col-sm-6" style="float: none; margin: 0 auto;margin-bottom:20px;height:200px;">' +                          
                            '<div class="flip-container" >' +              
                                '<div class="flipper">' +
                                    '<div class="front">' + 
                                        '<a id="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' + count + '>'+
                                            '<img class="img-fluid img-thumbnail img-straight"  src=' + thumbnail + ' />'+
                                        '</a>'+
                                    '</div>'+                              
                                    '<div class="back" style="float: none; margin: 0 auto;margin-bottom:20px;height:200px;">'+                                   
                                        '<div class="bg-dark mystyle text-center py-3" style="height:200px;">'+
                                            '<span>' + title + '</span><br>' +
                                            '<button href="#" data-toggle="modal" data-target="#movieModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showMovieDetails(this)" >See More</button><br>'+                     
                                            '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showMovieComments(this)" >Comments</button>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>' +
                            '</div>' +
                        '</div>'; 
             table.insertAdjacentHTML('beforeend', cell);            
             movieCount++;        
        }
           
        
    message = movieCount + " Restaurants " + category;    
    document.getElementById("summary").textContent = message;    
    document.getElementById("parent").textContent = "";
}
//This function is to display the "Now Showing" movies



//This function is to d{isplay the "Coming Soon" movies
function listComingMovies() {
    category = "Coming Soon";
    displayMovies(category);
    // document.getElementById("nowMenu").classList.remove("active");
    // document.getElementById("comingMenu").classList.add("active");
    // document.getElementById("aboutMenu").classList.remove("active");
}
//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showMovieDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("movieTitle").textContent = movie_array[item].restaurant;
    document.getElementById("moviePoster").src = movie_array[item].image;
    document.getElementById("genre").textContent = movie_array[item].type;
    document.getElementById("director").textContent = movie_array[item].location;
    document.getElementById("video").src = movie_array[item].video;
    // document.getElementById("release").textContent = movie_array[item].release;
    // document.getElementById("advice").textContent = movie_array[item].advice;
    document.getElementById("story").textContent = movie_array[item].description;
    // document.getElementById("trailer1").src = movie_array[item].video1;
    // document.getElementById("trailer2").src = movie_array[item].video2;
}

//This function opens a new window/tab and loads the
//particular movie in the cinema website
function buyTicket() {
    window.open(movie_array[currentIndex].buy, "_blank");
}
