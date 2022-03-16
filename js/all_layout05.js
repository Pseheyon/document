$(function(){


    function tabMenu() {
        var 번호 = $(this).index(); //0, 1, 2, 3
        $('.tabLink li').removeClass('active');
        $(this).addClass('active');
        $('.tabContent>div').removeClass('active');
        $('.tabContent>div').eq().addClass('active'); //밑에 있는거랑 같은거임
        //$('.tabContent>div')
        //.eq(idx).addClass('active')
        //.siblings().removeClass('active');
    }

    $('.tabLink li').on('click', tabMenu);

    // $('.xi-close').on('click', function(){
    //     $('headerWrap').slideUp(); 와 점이 빠져서 안되는거였네...이눔이 클래스자식!
    // })

    $('.button_wrap .xi-close').on('click', function(){
        $('.headerWrap').slideUp();
    })


})