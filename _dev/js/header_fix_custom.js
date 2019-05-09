import $ from 'jquery';
import prestashop from 'prestashop';



$(document).ready(function () {
    
    console.log("cc");
    
    fixHeader();
    bindBrandsMenu();
    
    

});

function fixHeader()
{

    let trueHeader = $('#header');
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
            button.removeClass('clicked');
            button.find('i').html('&#xE5D2');
            menu.hide();
            
        }
        else {
            button.addClass('clicked');            
            button.find('i').text('close');
            menu.show();
        }
    });
}