$(function(){
    ///////////////////////////////////////////////////////////////
    
    //웹기능사
    // var left = 1;

    // function mainSlide() {
    //     $('mainSlide').css({left:-(left*100)+"%"})
    //     left=left+1;
    //     if(left==3) {left=0}
    // }

    

    // setInterval(mainSlide,2000)

    //slick
    $('.mainSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
    });

    $('.mainVisual .slideArrows i:first-child').on('click', function(){
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .slideArrows i:last-child').on('click', function(){
        $('.mainSlide').slick('slickNext')
    })


    //////////////////////////////////////////////////////////////
});