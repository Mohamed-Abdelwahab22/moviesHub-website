

async function getAPI(category , pageNum){

    let myData = await  fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=6d5710b142ce7c977e5b1d38525e1bd0&language=en-US&page=${pageNum}`) 
 
    myData = await myData.json();  
 
    currentPage = myData.page;
 
    myArr = myData.results;


    $(".moviesBtns").click(function(e){
 
     let btnCheck = e.target.innerHTML;
 
     if(btnCheck == "Next"){
 
         $(".num1").html(pageNum + 1)
 
         $(".num2").html(pageNum + 2)
 
         $(".num3").html(pageNum + 3)
 
         pageNum = pageNum + 1 ;
 
         getAPI(category , pageNum)
     }
     else{
 
         
         $(".num1").html(pageNum - 1)
 
         $(".num2").html(pageNum )
 
         $(".num3").html(pageNum + 1)
 
         pageNum = pageNum - 1 ;
 
         getAPI(category , pageNum)
 
     }
 
    })

       displayData()



}

async function getTV(category , pageNum){

    let TVDATA = await fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=6d5710b142ce7c977e5b1d38525e1bd0&language=en-US&page=${pageNum}`);

    TVDATA = await TVDATA.json();

    currentPage = TVDATA.page;


    $(".TVbtns").click(function(e){
 
     let btnCheck = e.target.innerHTML;
 
     if(btnCheck == "Next"){
 
         $(".tvNum1").html(pageNum + 1)
 
         $(".tvNum2").html(pageNum + 2)
 
         $(".tvNum3").html(pageNum + 3)
 
         pageNum = pageNum + 1 ;
 
         getTV(category , pageNum)
     }
     else{
 
         
         $(".tvNum1").html(pageNum - 1)
 
         $(".tvNum2").html(pageNum )
 
         $(".tvNum3").html(pageNum + 1)
 
         pageNum = pageNum - 1 ;
 
         getTV(category , pageNum)
 
     }
 
    })

    function displayTV(){

    
        let hasala = `` ;
    
        for( let i = 0 ; i < TVDATA.results.length ; i++ ){
    
    
            hasala += ` <div class="col-md-4 my-3">
            <div class="parent rounded-3">
                <div class="overlay  text-text-dark text-center d-flex justify-content-center align-items-center">
                    <div>
                        <h3>${TVDATA.results[i].original_name}</h3>
                        <br>
                        <span>${TVDATA.results[i].overview}</span>
                        <br>
                        <br>
                        <small>rate : ${TVDATA.results[i].vote_average}</small>
                    </div>
                
                </div>
            
                <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${TVDATA.results[i].poster_path}">
                
            </div>
       
       </div>`
    
        }
    
        document.getElementById("TVshows").innerHTML = hasala;
    
    }
    

    displayTV()

}


async function getTrending() {

    let trendingData = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=6d5710b142ce7c977e5b1d38525e1bd0&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`);

    trendingData = await trendingData.json();


    
}





function displayData(){

    
    let hasala = `` ;

    for( let i = 0 ; i < myArr.length ; i++ ){


        hasala += ` <div class="col-md-4 my-3">
        <div class="parent rounded-3">
            <div class="overlay  text-text-dark text-center d-flex justify-content-center align-items-center">
                <div>
                    <h3>${myArr[i].original_title}</h3>
                    <br>
                    <span>${myArr[i].overview}</span>
                    <br>
                    <br>
                    <small>rate : ${myArr[i].vote_average}</small>
                    <br>
                    <br>
                    <small>${myArr[i].release_date}</small>
                </div>
            
            </div>
        
            <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${myArr[i].poster_path}">
            
        </div>
   
   </div>`

    }

    document.getElementById("Movies").innerHTML = hasala;

}

$(".TVcollection p").click(function(e){

    $(this).addClass("test")
    
    if($(this).hasClass("test")){

        $(".icon").not($(this)).removeClass("test")
    }

    
    let word = e.target.innerHTML;

    if( word == "Popular"){

        word = "popular"

        console.log(word)

        getTV(word)

    }
    else if( word == "Airing today"){

        word = "airing_today"

        getTV(word)

    }
    else if( word == "Top rated"){

        word = "top_rated"

        getTV(word)

    }
    else if( word == "On TV"){

        word = "on_the_air"

        getTV(word)

    }

})

$(".collection p").click(function(e){

    

        $(this).addClass("test")
    
        if($(this).hasClass("test")){
    
            $(".icon").not($(this)).removeClass("test")
        }
    
    

    let userWord = e.target.innerHTML;

    if( userWord == "Now playing"){

        userWord = "now_playing"

        getAPI(userWord)

    }
    else if( userWord == "Popular"){

        userWord = "popular"

        getAPI(userWord)

    }
    else if( userWord == "Top rated"){

        userWord = "top_rated"

        getAPI(userWord)

    }
    else if( userWord == "Upcomming"){

        userWord = "upcoming"

        getAPI(userWord)

    }
    else if ( userWord == "Trending"){

        getTrending(userWord)

    }

})



$(document).ready(function(){

    $("#loading , .spinner" ).fadeOut(1000 , function(){
        $("#loading").addClass("d-none")
    })

    getAPI("now_playing" , 1)

    getTV("popular" , 1)

})










async function getAllMovies(userWord){
    
    let allMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6d5710b142ce7c977e5b1d38525e1bd0&query=${userWord}&language=en-US&page=1&include_adult=false`)

    allMovies = await allMovies.json();

    myArr = allMovies.results;

    for(let i = 0 ; i < myArr.length ; i++ ){

        if(myArr[i].original_title.toLowerCase().includes(userWord.toLowerCase())){
            $(".allSearchResult").html(`
        
        <div class="col-md-4 my-3">

        <h1 class="text-white">Search Results :</h1>
        
            <div class="parent">

                    <div class="overlay text-text-dark text-center d-flex justify-content-center align-items-center">

                    <div>
                        <h3>${myArr[i].original_title}</h3>
                        <br>
                        <span>${myArr[i].overview}</span>
                        <br>
                        <br>

                        <small>rate : ${myArr[i].vote_average}</small>
                        <br>
                        <br>
                        <small>${myArr[i].release_date}</small>
                    </div>

                </div>

                <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${myArr[i].poster_path}">


            </div>
            
        </div>`)
        }

    }

}
getAllMovies()