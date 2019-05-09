import $ from 'jquery';
import prestashop from 'prestashop';



$(document).ready(function () {
   
   
    hideLandingOnClick();   
    

});

function hideLandingOnClick()
{

    let landing = $('.landing-frame');
    let landingFix = $('.landing-frame-fix');
    let button = $('.landing-button').find('a');

    
    

    button.on('click', (event) => {
        setTimeout(() => {
            landing.hide();
            landingFix.hide();
            
        }, 600);
        console.log('hide');
        
    })
    
}
