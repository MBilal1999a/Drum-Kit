var v= document.querySelectorAll(".drum").length;
console.log(v);
for ( var i = 0; i<v; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
}
function handleClick(){

    var m=this.innerHTML;
     //console.log(m);
     makesound(m);
//     switch(m)
//     {
//         case "w":
                
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play();
//                 break;
//         case "a":
                
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;

//         case "s":
                
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play();
//                 break; 
//         default:
//             console.log("No one");
//     }
       
        
    
    
}
document.addEventListener("keydown",function (event) {
        console.log(event);
        makesound(event.key);
})
function makesound(key) {
        switch(key)
    {
        case "w":
                
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        case "a":
                
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

        case "s":
                
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break; 
                
        case "d":
                
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

        case "j":
                
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break; 
              

        case "k":
                
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break; 
        case "l":
                
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break; 
        default:
            console.log("No one");
    }
}

