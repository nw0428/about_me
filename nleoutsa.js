// about_me.js

// array of images
var images = [
        "url('http://i.imgur.com/wiu9cFk.jpg')", // horse
        "url('http://i.imgur.com/TJ7YEjs.jpg')", // green sweatshirt
        "url('http://i.imgur.com/kutJzmS.jpg')", // the stare
        "url('http://i.imgur.com/76xH6od.jpg')", // reclining
        "url('http://i.imgur.com/TFkftVq.jpg')", // Lady Agnew
        "url('http://i.imgur.com/xnv5NqD.jpg')", // emma sitting
        "url('http://i.imgur.com/EQOvgXu.jpg')", // elephants
        "url('http://i.imgur.com/09m22VZ.jpg')", // track
        "url('http://i.imgur.com/YiVlgnF.jpg')", // emma yellow
        "url('http://i.imgur.com/ga60NEv.jpg')", // first self portrait
        "url('http://i.imgur.com/Pzz6Ded.jpg')", // nose ring
        "url('http://i.imgur.com/p0Mp7EM.jpg')", // sailor
        "url('http://i.imgur.com/WDTavoX.jpg')", // lizard
        "url('http://i.imgur.com/fwXjPPZ.jpg')", // coins
        "url('http://i.imgur.com/HLxE16q.jpg')", // desk
        "url('http://i.imgur.com/jUTPp8x.jpg')", // room
        "url('http://i.imgur.com/sAHFNQ0.jpg?1')", // table
        "url('http://i.imgur.com/x3JLURh.jpg?1')" // guitar
];
// what is the current image?
var currentImage = 0;
//clicking left and right pics(or big pic) shuffles through image array
$('.leftPic').click(function() {
    currentImage = currentImage - 1;
    if (currentImage < 0) {
        currentImage = images.length -1;
    };
    loopImages();
});
$('.rightPic').click(function(){
    currentImage = currentImage + 1;
    if (currentImage > images.length -1) {
        currentImage = 0;
    };
    loopImages();
});
$('.big').click(function(){
    currentImage = currentImage + 1;
    if (currentImage > images.length -1) {
        currentImage = 0;
    };
    loopImages();
});
// clicking center image expands/collapses pics
$('.photos').click(function() {
    $("div").toggleClass('expand');
    $(".big").toggleClass('zoom');
    $(".info").toggleClass('lower');
});
//display images in a loop
var loopImages = function() {
        $('.leftPic').css("background", images[currentImage - 1]);
        $('.leftPic').css("background-size", "200px 200px");
        $('.leftPic').css("-webkit-background-size", "200px 200px");
        $('.photos').css("background", images[currentImage]);
        $('.photos').css("background-size", "200px 200px");
        $('.photos').css("-webkit-background-size", "200px 200px");
        $('.rightPic').css("background", images[currentImage + 1]);
        $('.rightPic').css("background-size", "200px 200px");
        $('.rightPic').css("-webkit-background-size", "200px 200px");
        $('.big').css("background", images[currentImage]);
    if (currentImage == 0) {
        $('.leftPic').css("background", images[images.length - 1]);
        $('.leftPic').css("background-size", "200px 200px");
        $('.leftPic').css("-webkit-background-size", "200px 200px");
    }
    else if (currentImage == images.length - 1) {
        $('.rightPic').css("background", images[0]);
        $('.rightPic').css("background-size", "200px 200px");
        $('.rightPic').css("-webkit-background-size", "200px 200px");
    }
};
// start with images collapsing
$("div").toggleClass('expand');
// set images
loopImages();