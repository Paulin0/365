//intro scripts 
let script1 = "You are born into a noble family.  Begin your adventure by exploring the world around you";

let script2 = "You are born into a commoner family.  Begin your adventure by exploring the world around you";

let script3 = "You are born into a poor family.  Begin your adventure by exploring the world around you";

let script = "";

let p = document.querySelector("p");

let hiearchy = "n/a";

function scriptSelector(){
	
	let num = Math.ceil(Math.random()*3);//should be 1-3
	
	if(num === 1){
		script = script1;
		hiearchy = "noble";
	}
	else if(num === 2){
		script = script2;
		hiearchy = "commoner";
	}
	else{
		script = script3;
		hiearchy = "poor";
	}
	
	p.textContent = script;
	
}//func end 


scriptSelector();


//CURRENT LOCATION
let surroundings = "bedroom";


//screen text 
let screenTxt = document.querySelector("#screenTxt");

let hasScanned = false;

//buttons for interactivity 
let scanBtn = document.querySelector("#scan");

scanBtn.addEventListener("click", scanning);

//SCANNING
function scanning(){

	function scanning1(){
	screenTxt.textContent = "Scanning.";
	}
	
	function scanning2(){
	screenTxt.textContent = "Scanning..";
	}
	
	function scanning3(){
	screenTxt.textContent = "Scanning...";
	}
	
	setTimeout(scanning1,500);
	setTimeout(scanning2,1000);
	setTimeout(scanning3,1500);
	
	hasScanned = true;
	
	//scanning results
	function scanResults(){
		//house
			//noble 
			if(hiearchy == "noble"){
				//bedroom
				if(surroundings == "bedroom"){
				screenTxt.textContent = "You find yourself in a large and luxurious room.  It looks extremly clean like it was cleaned before you woke up.  To your left is a floor to ceiling glass door that leads to a balkony.  You can see large trees in the distance while not being in front of the window, those trees must be huge.  To your front is a lrge bookshelf to which under it is a fireplace that has a burning fire.  to your right are some closets and the door";
				}//bedroom end
				
}; //noble end 

	//commoner start
	if(hiearchy == "commoner"){
		//Bedroom
		if(surroundings == "bedroom"){
			screenTxt.textContent = "You find yourself in a clean room with a window to your oeft that shows you a farming field and a treeline in the distance.  To your front is a large rectangular wooden chest, and to your right is a nnightstand and a door";
		};//bedroom end
		
	};//commoner end


	//poor start 
	if(hiearchy == "poor"){
		//Bedroom
		if(surroundings == "bedroom"){
			screenTxt.textContent = "You find yourself in a clean but worn down bedroom, there are bo windows and only a couole of wooden boxes in the floor, and to your right is a flimsy wooden door";
		};//bedroom end
		
	};//poor end
	 

}//scanResults end (function)

	setTimeout(scanResults,1800);

			//commoner 
			//if(hiearchy == "commoner"){};
			//poor
			//if(hiearchy == "poor"){};		
	
	//hide intro scripr 
	let iTS = document.querySelector("#introScript");
	iTS.classList.add("deleteIntroScript");
	
}//scanning end 




//if has scanned = true then add the rest of the buttons 

