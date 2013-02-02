$(function(){
    var speed = 1000;
    $('a[href^="#"]').bind('click',function(){
        var id = $(this).attr('href');
        if(id == '#')
            goTo('body');
        else
            goTo(id);
        return(false);
    });
    function goTo(ancre){$('html,body')
	.animate({scrollTop:$(ancre).offset().top},speed,'swing',function(){
            if(ancre != 'body')
                window.location.hash = ancre;
            else
                window.location.hash = '#';
            $(ancre).attr('tabindex','-1');
            $(ancre).removeAttr('tabindex');
        });
    }
});