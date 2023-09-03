$(document). ready (function(){

   
    $(".navigation-Burger i").click(function(){		
	  $(".navigation-bar-for-tablets") .slideToggle('slow')

    });


     $(".navigation-Burger i").click(function(){		
	$(".navigation-bar-for-phones") .slideToggle('slow')

   

    });




    $(".left-button-section").click(function(){
        $(".swiper-button-prev").click();
       });
      
       $(".right-button-section").click(function(){
        $(".swiper-button-next").click();
       });






});