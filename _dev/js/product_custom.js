import $ from 'jquery';
import prestashop from 'prestashop';



$(document).ready(function () {
    
    nextImage();

});

function nextImage()
{

    let thumbs = $('.js-qv-product-images .thumb-container');

    console.log(thumbs.length);
    
    if (thumbs.length <2) {
        $('.custom-carouss-arrows').css('display', 'none');
        return;
    }

    $('.custom-carouss-arrows').on(
        'click',
        (event) => {
            let images = []
            let currIndex = 0;
            let nextIndex = 0;
            
            thumbs.each((index, el) => {
                
                let img = el.firstElementChild;
                if (img.classList.contains('selected')){
                    currIndex = index;
                }
                images.push(img);
            });
            let maxIndex = images.length - 1;
            if (event.target.classList.contains('right')){
                if (currIndex >= maxIndex) {
                    nextIndex = 0;
                }
                else {
                    nextIndex = currIndex + 1;
                }
            }
            else if (event.target.classList.contains('left')){
                if (currIndex <= 0) {
                    nextIndex = maxIndex;
                }
                else {
                    nextIndex = currIndex - 1;
                }
            }


            $('.js-modal-product-cover').attr('src', $(images[nextIndex]).data('image-large-src'));
            $('.selected').removeClass('selected');
            $(images[nextIndex]).addClass('selected');
            $('.js-qv-product-cover').prop('src', $(images[nextIndex]).data('image-large-src'));
            
            
            
        }
    )
}