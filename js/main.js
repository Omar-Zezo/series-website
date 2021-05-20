$(document).ready(function(){
//landing height
    $('.landing').height($(window).outerHeight());
    $('.landing').width($(window).outerWidth());

// Preloader
$(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });
//slider switch
$('.switch i').on('click',function(){

    $(this).addClass('active').siblings().removeClass('active')
    $('.block').hide()
    $('#'+$(this).data('switch')).fadeIn(400)
    
});


//login page

$('[placeholder]').focus(function(){

    var placeholder = $(this).attr('placeholder')

    $(this).attr('placeholder','')

    $(this).blur(function(){

    $(this).attr('placeholder',''+ placeholder +'')

    if($(this).val() === ''){
        $(this).next('span').css('visibility','visible')
    }else{
        $(this).next('span').css('visibility','hidden')
    }
    })
});


$('input[type="checkbox"]').click();




// add class show to asked div
$('.asked button').on('click',function(){

    $(this).parent('li').find('.details').slideToggle()
})
});


$('.slide-series').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,    
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        991:{
            items:3
        }
    }
});


$('.slide-movies').owlCarousel({    
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        991:{
            items:3
        }
    }
})
