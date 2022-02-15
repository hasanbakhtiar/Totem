// $(function(){
//     $(".btn")//nə ilə
//     .click(function(){ //necə
//         $('p')//nəyi
//         .hide();// etsin
//     })
// })

// https://www.w3schools.com/jquery/jquery_selectors.asp
$(function(){})
$('.btn').click(function(){
    $('h1.info').toggle(2000);
    $('p.info').css({'background':"red","color":"white"});
    $("h4").addClass('red');
    $("span").append("Hello")
})