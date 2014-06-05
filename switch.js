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

	var board = document.getElementById("board");

	// if (board_array == [something here])
  // {
  // 	player won
  // }

  var board_array = [
  	{ // this represents the first box
  		color: "red",
  		can_move: false
  	},
  	{
  		color: "red",
  		can_move: false
  	},
  	{
  		color: "red",
  		can_move: true
  	},
  	{
  		color: "red",
  		can_move: true
  	},
  	{
  		color: "white",
  		can_move: false,
  	},
  	{
  		color: "blue",
  		can_move: true,
  	},
  	{
  		color: "blue",
  		can_move: true,
  	},
  	{
  		color: "blue",
  		can_move: false,
  	},
  	{
  		color: "blue",
  		can_move: false,
  	}
  ];

  var white_position = 4;

  // alert(board_hash[4].color);

  var board = document.getElementById("board");

	board.addEventListener("click", function(evt){
	  var e = evt.target; //get the target element that was clicked
	  if(e.nodeName.toLowerCase() === "canvas"){ // only trigger if a canvas element was clicked
	      var canvas = document.getElementById(e.id);
	      var context = canvas.getContext("2d");

	      var clicked_box_index = e.id - 1;

	      // check if move valid
	      if (board_array[clicked_box_index].can_move){
	      	// 1: update board_array

	      	// for(i = 0; i< 9; i++){
	      	// 	if (board_array[i].color == "white"){
	      	// 		board_array[i].color = board_array[clicked_box_index].color;
	      	// 	}
	      	// }

	      	board_array[white_position].color = board_array[clicked_box_index].color;
	      	
	      	board_array[clicked_box_index].color = "white";

	      	white_position = clicked_box_index;

	      	// 1.5: update all can_move s

	      	// white_position = 0;
	      	// if (white_position == 0 || white_position == 1 || white_position )

	      	for(i=0; i< 9; i++){
	      		if (white_position-2 <= i && i <= white_position + 2){
	      			board_array[i].can_move = true;
	      		} else {
	      			board_array[i].can_move = false; 
	      		}
	      		console.log("can_move of " + i + " is " +board_array[i].can_move);
	      	}

	      	board_array[white_position].can_move = false;

	      	// here

	      	// 2: call our super cool redrawCanvases function
	      	
	      	for (var i = 1; i <= 9; i++) {
	      		if (board_array[i-1].color == "white"){
	      			var canvas = document.getElementById(i.toString());
	      			var context = canvas.getContext("2d");
	      			context.clearRect (0 , 0 , 51 , 51);
	      		} 
	      		if (board_array[i-1].color == "red"){
	      			var canvas = document.getElementById(i.toString());
	      			var context = canvas.getContext("2d");
	      			context.beginPath();
	      			context.arc(25,25,25,0,2*Math.PI,true); //draws circles
	      			context.fillStyle = "red"; //sets circle color to red or blue
	      			context.fill();
	      		} 
	      		if (board_array[i-1].color == "blue"){
	      			var canvas = document.getElementById(i.toString());
	      			var context = canvas.getContext("2d");
	      			context.beginPath();
	      			context.arc(25,25,25,0,2*Math.PI,true); //draws circles
	      			context.fillStyle = "blue"; //sets circle color to red or blue
	      			context.fill();
	      		} 
	      		
	      	}


	      }



	  }
	});

	function redrawCanvases(){



		for (var i = 1; i <= 9; i++) {
			if (i == 5) continue;
			var canvas = document.getElementById(i.toString());

			var context = canvas.getContext("2d");
			context.beginPath();
			context.arc(25,25,25,0,2*Math.PI,true); //draws circles
			context.fillStyle = (i<5) ? "#f00" : "#00f"; //sets circle color to red or blue
			context.fill();
		}
	}
};


