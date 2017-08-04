console.log('Loaded!');

//change the text of main text div
var element =document.getElementById("main-text");

element.innerHTML="Javeen Kaur";

//move the img
var img =document.getElementById("modi");
var marginLeft =0;
function marginRight(){
    marginLeft= marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick= function(){
    var inerval= set.Interval(moveRight,100);
};
