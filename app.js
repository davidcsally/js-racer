// alert("it works");

const chick = document.getElementById("chick");
const chicken = document.getElementById("chicken")
const raceTrack = document.getElementById("raceTrack")
let context = raceTrack.getContext('2d');
const chickSprite = new Image()
chickSprite.src = "chick.jpg";
const chickenSprite = new Image ();
chickenSprite.src = "greychicken.jpg"

// chick.addEventListener("keydown", (x) =>{
// 	if(x.keyCode === 39){
// 		alert("you pushed the right arrow")
// 		//move chick to the right
// 	}
// })

// chicken.addEventListener("keydown", (x) =>{
// 	if(x.keyCode === 68){
// 		alert("you pushed the d button")
// 		//move chick to the right
// 	}
// })
 
let chickXPos = 0;
let chickYPos = 0
let chickenXPos =0;
let chickenYPos = 50;

context.drawImage(chickSprite, chickXPos, chickYPos, 40, 40);
context.drawImage(chickenSprite, chickenXPos, chickenYPos, 40, 40);
context.stroke();

const checkWin = () =>{
	if(chickXPos > raceTrack.width - 28){
		alert("THE CHICK HAS WON!")
	}
	if(chickenXPos > raceTrack.width - 28) {
		alert("THE CHICKEN HAS WON!")
	}
}

const move = (e) => {	
	if(e.keyCode ===39){
		chickXPos +=4;
	};
	if(e.keyCode ===68){
		chickenXPos +=4;
	};
raceTrack.width=raceTrack.width;
context.drawImage(chickSprite, chickXPos, chickYPos, 40, 40);
context.drawImage(chickenSprite, chickenXPos, chickenYPos, 40, 40);
context.stroke();
checkWin();
}

document.onkeydown = move;



