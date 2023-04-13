//print = "Hi";

function generate(name){
	var responses = [
			"Whisper",
			"Venus",
			"Solaris",
			"Physique",
			"Scramble",
			"Ace",
			"Rime",
			"Cryptic",
			"Sight",
			"Siren",
			"Daydream",
			"Silver",
			"Dragonfly",
			"Eclipse",
			"Bubble",
			"Steelskin",
			"Paradox",
			"Knightmare",
			"Decay",
			"Echo",
			"Vapor",
			"Behemoth",
			"Barbatos",
			"Morax",
			"Beelzebub",
			"Buer",
			"Switch",
			"Anarchy",
			"Quake"
			];
	var randomIndex = Math.floor(Math.random() * responses.length);
			
	var responseElement = document.getElementById("response");
	responseElement.innerHTML = "Hi, "+name+"! Your Mutant alias is "+responses[randomIndex]+".";

	restyle();
}

function restyle(){
	var backgroundColors = ["red", "yellow", "green", "blue", "aqua","purple","whitesmoke","lightblue",];
	var textColors = ["white", "black", "gray", "pink","aliceblue", "orange"];
	var font = ["Arial","Times New Roman","Courier New","Georgia","Brush Script MT"];

	var randomBgIndex = Math.floor(Math.random() * backgroundColors.length);
	var randomTextColorIndex = Math.floor(Math.random() * textColors.length);
	var randomFontIndex = Math.floor(Math.random()*font.length);
	var restyleElement = document.getElementsByClassName("output")[0];
	
	restyleElement.style.backgroundColor = backgroundColors[randomBgIndex];
	restyleElement.style.color = textColors[randomTextColorIndex];
	restyleElement.style.fontFamily = font[randomFontIndex];
}