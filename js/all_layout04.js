$(function(){
    //////////////////////////////////////////
    //$('선택').on('이벤트,할일')
    // 일 =>function
    
    // $(this) 나
    // $(this).index() 번호
    // $(this),
    // $(this).index(),
    // $(this).parent(),
    // $(this).next(),
    // $(this).prev(),
    // $(this).children(),


    function 팝업창끄기() {
        
            $(this).parent().hide();
            console.log($(this).parent().index())
            
            
        
    }

    $('.popUp button').on('click', 팝업창끄기);
     
    















    //////////////////////////////////////////
})