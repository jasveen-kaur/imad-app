console.log('Loaded!');

//change the text of main text div
var element =document.getElementById("main-text");

element.innerHTML="Jasveen Kaur";

//move the img
var img =document.getElementById("modi");
var marginLeft =0;
function moveRight(){
    marginLeft= marginLeft + 1;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick= function(){
    var inerval= setInterval(moveRight ,50);
};
