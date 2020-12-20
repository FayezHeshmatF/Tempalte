/* $ window css scroll*/
$(document).ready(function () {

  // loading
  $(window).on("load",function(){
    $('.loading').fadeOut(1000,function(){
      $('body').css('overflow','auto')
    })
  })



  // height screan page
  $(function () {
    $(".header").height(height());
    $(window).resize(function () {
      $(".header").height($(window).height());
    });
  });

  //scrool nav

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
      $("nav").css({
        background: "#0E1B4D",
        padding: "5px 0",
      });
    } else {
      $("nav").css({
        background: "transparent",
        padding: "15px 0",
      });
    }
  });
  

  $(".testiamonials .buttons .btn").on("click", function (e) {
    $(this).addClass("active").siblings().removeClass("active");
    e.preventDefault();
    $("#" + $(this).data("click"))
      .siblings()
      .fadeOut(200, function () {
        $("#" + $(this).data("click"))
          .siblings()
          .removeClass("active");
      });
    $("#" + $(this).data("click"))
      .delay(200)
      .fadeIn(200, function () {
        $("#" + $(this).data("click")).addClass("active");
      });
  });

  // owl carouse


  $('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    autoplay:true,
    center:true,
    //margin:10,
    //nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//toggle acion 
$(".faq .content .info i").on("click",function(){
  $(this).parent().parent().find("p").slideToggle(300);
  if($(this).hasClass('fa-plus-circle')){
    $(this).attr('class','fa fa-minus-circle');
    $(this).css('color','red');
    $(this).parent().css('color','red');
  }
  else{
    $(this).attr('class','fa fa-plus-circle');
    $(this).css('color','#000');
    $(this).parent().css('color','#000');
  }
})
// link share
$('nav li a').on('click',function(){
  $('html, body').animate({
    scrollTop : $('#' + $(this).data('scroll')).offset().top - 90
  },1000)
});

// button up
$(window).scroll(function(){
if($(window).scrollTop() >= 1000){
  $(".up").fadeIn(1000);
}else{
  $(".up").fadeOut(1000);
}
});

$('.up').on("click",function(){
  $('html, body').animate({
    scrollTop : 0
  },1000)
})

// oas
  $(function(){
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  })

  // $(function(){
  //  $('.venobox').venobox(); 
  //  window.addEventListener('load',venobox().refresh)
  // })

});
