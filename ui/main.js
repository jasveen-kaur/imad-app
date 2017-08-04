console.log('Loaded!');

//change the text of main text div
var element =document.getElementById("main-text");

element.innerHTML="Javeen Kaur";

//move the img
var img =document.getElementById("modi");

img.onClick= function(){
    img.style.marginRight="100px";
};
