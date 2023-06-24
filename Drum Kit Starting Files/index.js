// $("h1").css("color","pink");


var noOfButtons=document.querySelectorAll(".drum").length;

for (var i=0; i<noOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHTML=this.innerHTML;
       makeSound(buttonInnerHTML);
       addAnimation(buttonInnerHTML);
});

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimation(event.key);

});



function makeSound(key){
    switch(key){
        case "w":
        var one=new Audio("sounds/tom-1.mp3");
        one.play();
        break;

        case "a":
        var one=new Audio("sounds/tom-2.mp3");
        one.play();
        break;

        case "s":
        var one=new Audio("sounds/tom-3.mp3");
        one.play();
        break;

        case "d":
        var one=new Audio("sounds/tom-4.mp3");
        one.play();
        break;

        case "j":
        var one=new Audio("sounds/crash.mp3");
        one.play();
        break;

        case "k":
        var one=new Audio("sounds/kick-bass.mp3");
        one.play();
        break;

        case "l":
        var one=new Audio("sounds/snare.mp3");
        one.play();
        break;

        default:alert(key);
    }
}

function addAnimation(currentKey){

    document.querySelector("."+currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    });
}

   