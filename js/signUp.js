

let emailCheck = /^[A-Za-z]{3,10}[0-9]?[0-9]?[0-9]?(@)[a-z]{3,5}(\.)[a-z]{2,5}$/;

let passCheck = /^(.){6,15}$/;

$(".email").keyup(function(){
    if(emailCheck.test($(".email").val())){
        $(".EmailSpan").removeClass("text-danger")
        $(".EmailSpan").addClass("text-success")
        $(".EmailSpan").html("Success")
    }
    else{
        $(".EmailSpan").html("entre valid email")
        $(".EmailSpan").addClass("text-danger")
    }
})

$(".pass").keyup(function(){
    if(passCheck.test($(".pass").val())){
        $(".passSpan").removeClass("text-danger")
        $(".passSpan").addClass("text-success")
        $(".passSpan").html("Success")
    }
    else{
        $(".passSpan").html("entre valid password")
        $(".passSpan").addClass("text-danger")
    }
})

$(".rePass").keyup(function(){
    if($(".rePass").val() == $(".pass").val()){
        $(".rePassSpan").removeClass("text-danger")
        $(".rePassSpan").addClass("text-success")
        $(".rePassSpan").html("Password matched")
    }
    else{
        $(".rePassSpan").html("password not matched")
        $(".rePassSpan").addClass("text-danger")
    }
    
})

$(document).ready(function(){

    $("#loading , .spinner" ).fadeOut(1000 , function(){
        $("#loading").addClass("d-none")
    })

    let user_data =  JSON.parse(localStorage.getItem("userData"));

    for( let i = 0 ; i < user_data.length ; i++ ){

        $(".email").val(user_data[i].usermainEmail)

    }

    $(".formBg").show(0)


})

$(".nextBtn").click(function(){
    
    if(emailCheck.test($(".email").val()) && passCheck.test($(".pass").val()) && $(".rePass").val() == $(".pass").val()){

        $(".formBg").hide(1000 , function(){
            $(".secondFormBg").show(1000)
        })

    }
   
})

let userNameCheck = /^[a-z]{2,}\d*$/i;

let ageCheck = /^[1-9]?\d$/

let phoneCheck = /^(0)+[0-9]{10}$/


$(".name").keyup(function(){

    if(userNameCheck.test($(".name").val())){
        $(".NameSpan").removeClass("text-danger")
        $(".NameSpan").addClass("text-success")
        $(".NameSpan").html("Success")
    }
    else{
        $(".NameSpan").html("Entre valid user name")
        $(".NameSpan").addClass("text-danger")
    }

})


$(".age").keyup(function(){
    if(ageCheck.test($(".age").val())){
        $(".ageSpan").removeClass("text-danger")
        $(".ageSpan").addClass("text-success")
        $(".ageSpan").html("Success")
    }
    else{
        $(".ageSpan").html("Entre valid age")
        $(".ageSpan").addClass("text-danger")
    }
})

$(".phone").keyup(function(){
    if(phoneCheck.test($(".phone").val())){
        $(".phoneSpan").removeClass("text-danger")
        $(".phoneSpan").addClass("text-success")
        $(".phoneSpan").html("Success")
    }
    else{
        $(".phoneSpan").html("Entre valid phone number")
        $(".phoneSpan").addClass("text-danger")
    }
})



$(".submitBtn").click(function(){
    if(userNameCheck.test($(".name").val()) && ageCheck.test($(".age").val()) && phoneCheck.test($(".phone").val())){

        window.location.href = "home.html"

    }
})

