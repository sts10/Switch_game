// This week's game is called SWITCH! (It is a one player game.)

// The game is played on a one-dimensional board 9 units long, placed either horizontally or vertically. 
//(Let's assume it is horizontal for the rest of this description.)

// The game starts with four red tokens and four black tokens grouped together on the left and right side of the board, respectively. 
//The 9th space on the board (the middle space) starts off empty.

// Each turn, the player can move any one token to an unoccupied adjacent space or jump over exactly one token
//(of either color) to land on an unoccupied space.

// Game Objective: Switch the pieces so that the black tokens are all on the left side of the board 
// and the red tokens are on the right, in the shortest amount of time and shortest number of moves possible.
"use strict";
window.onload = function(){
	//draw initial board configuration
	for (var i = 1; i <= 9; i++) {
		if (i == 5) continue;
		var canvas = document.getElementById(i.toString());

		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(25,25,25,0,2*Math.PI,true); //draws circles
		context.fillStyle = (i<5) ? "#f00" : "#00f"; //sets circle color to red or blue
		context.fill();
	}
};