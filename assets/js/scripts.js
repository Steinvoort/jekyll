// Count menu items for menu height
var menuItems = $('ul.navigation>li').length;
var itemHeight = $('ul.navigation>li>a:first').outerHeight()
var menuHeight = menuItems * itemHeight

// Open Menu
$(function(){
    $('.tcon-menu--xcross').on('click', function(){
        if(!$('ul.navigation').hasClass('open')){
            $('ul.navigation').addClass('open');
            $('ul.navigation').css("max-height", menuHeight);
        } else {
            $('ul.navigation').removeClass('open');
            $('ul.navigation').css("max-height", "0");
        }
    });
});

// Body margin for sticky footer
$(function(){
    var footerHeight = $('footer').outerHeight() + 40
    $('body').css("margin-bottom", footerHeight);
});
$(window).resize(function(){
    var footerHeight = $('footer').outerHeight() + 40
    $('body').css("margin-bottom", footerHeight);
});

//Open & close contact form
$(function(){
    $('#open-modal-tag').on('click', function(e){
        e.preventDefault();
        $('.custom-modal').addClass('open');
        $('body').css("overflow", "hidden");
    });

    $('.close-modal').on('click', function(){
        $('.custom-modal').addClass('fade-out');
        $('body').css("overflow", "visible");
        setTimeout(function(){
            $('.custom-modal').removeClass('open');
            $('.custom-modal').removeClass('fade-out');
        },400);
    });
});