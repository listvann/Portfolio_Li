
function switchTheme(){
    $(".head_inner nav ul li.switch a").on("click",function(e){
        $("body").toggleClass("switchMode");
        e.preventDefault();
    });
}

function moveToAnchor(){
    $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
    });
}

$(document).ready(function(){
    switchTheme();
    moveToAnchor();
});

