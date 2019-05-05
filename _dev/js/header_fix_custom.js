import $ from 'jquery';
import prestashop from 'prestashop';



$(document).ready(function () {
    
    console.log("cc");
    
    fixHeader();
    
    

});

function fixHeader()
{

    let trueHeader = $('#header');
    let fixHeader = $('.header-fix');

    let h = trueHeader.height();
    console.log("h = " + h);
    
    fixHeader.css("height", h);
    
}