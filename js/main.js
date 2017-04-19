$(document).ready(function () {

    // Call SMINT jQuery Plugin
    $('.subMenu').smint({
        'scrollSpeed': 1000
    });

    //Call Text Rotate
    $('.demo3 .rotate').textrotator({
        animation: 'flipCube',
        speed: 1500
    });

    //Clicking the alien will make him dip down
    $('#alien1').click(function () {
        $('#alien1').css(
            'margin-bottom', '-250px'
        );
    });
});

//Add favorite sticker to selected menu items
var favorite = $('.favorite');

favorite.after('<img class="favoriteSticker" src="img/favorite.png">');

var favoriteSticker = $('.favoriteSticker');

favoriteSticker.css({
    'width': '30px',
    'display': 'inline'}
);
