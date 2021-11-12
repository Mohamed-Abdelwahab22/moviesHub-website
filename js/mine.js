
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


async function getMovies(){

    let myData = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6d5710b142ce7c977e5b1d38525e1bd0&language=en-US&page=1")

    myData = await myData.json()

    hasala = ``

    for(let i=0 ; i < myData.results.length ; i++){

        $(".owl-item img").eq(i).attr("src",`https://image.tmdb.org/t/p/w500/${myData.results[i].poster_path}`)
        }
}
getMovies()


$(".icon").click(function(){

    $(".icon").addClass("test")

    if($(this).hasClass("test")){

        $(".icon").not($(this)).removeClass("test")
    }


})



$(".Questions").click(function(){

    $(this).next().removeClass(".displayContent").slideToggle(function(){
        
        $(".displayContent").not($(this)).slideUp()
        

    })

    $("i" , this).toggleClass("fa-plus fa-minus")

})


let userData = [];


$(".startBtn").click(function(){

    data = {
        usermainEmail : $(".mainEmailAdd").val()
    }

    userData.push(data)

    localStorage.setItem("userData" , JSON.stringify(userData))

    window.location.href = "signUp.html";


})


$(document).ready(function(){

    $("#loading , .spinner" ).fadeOut(1000 , function(){
        $("#loading").addClass("d-none")
    })

})