import $ from 'jquery';
import prestashop from 'prestashop';

$(document).ready(function () {
    
    
    hideLandingOnClick();   
    hideLandingAccordingToUrl();

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

function hideLandingAccordingToUrl() {
    let landing = $('.landing-frame');
    let landingFix = $('.landing-frame-fix');

    console.log(location.href.includes("#featured-products"))
    console.log(location.href)


    if (location.href.includes("#") || location.href.includes("?")) {
        landing.hide()
        landingFix.hide()
    }
}
