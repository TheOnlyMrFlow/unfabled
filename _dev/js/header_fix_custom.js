import $ from 'jquery';
import prestashop from 'prestashop';



$(document).ready(function () {
    
    console.log("cc");
    
    fixHeader();
    bindBrandsMenu();
    
    

});

function fixHeader()
{

    let trueHeader = $('.header-nav');
    let fixHeader = $('.header-fix');

    let h = trueHeader.height();
    console.log("h = " + h);
    
    fixHeader.css("height", h);
    
}

function bindBrandsMenu() {
    
    let button = $('.mid-nav');
    let menu = $('.header-top');

    button.on('click', (event) => {
        if (button.hasClass('clicked')) {
            menu.removeClass('slideInLeft');           
            menu.addClass('slideOutRight')

            setTimeout(() => {
                button.find('i').html('&#xE5D2');
                button.removeClass('clicked');
                menu.hide();
            }, 400);
            
        }
        else {
            button.addClass('clicked');            
            button.find('i').text('close');
            menu.addClass('animated fast')
            menu.removeClass('slideOutRight');           
            menu.addClass('slideInLeft')
            menu.show();
            
        }
    });
}