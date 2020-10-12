window.onload=function start(){
	const winPerms = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	let gameState = ["","","","","","","","",""];
	var turn = "X";
	let board = document.querySelectorAll("#board div");
	let message = document.querySelector("#status");
	let resetButton = document.querySelector(".btn");
	resetButton.addEventListener('click', function(){
		message.classList.remove("you-won");
		message.textContent = "Move your mouse over a square and click to play an X or an O.";
		gameState = ["","","","","","","","",""];
		turn = "X";
		for (let i=0; i<9;i++){
			board[i].textContent = "";
			board[i].classList.remove("X");
			board[i].classList.remove("O");			
		}			
	});
	for (let x=0; x<9;x++){
		board[x].classList.add("square");
		board[x].addEventListener('click', function(){
			board[x].textContent = turn;
			gameState[x] = turn;
			for (y = 0; y < winPerms.length; y++){
				if (gameState[winPerms[y][0]] == turn && gameState[winPerms[y][1]] == turn && gameState[winPerms[y][2]] == turn){
					message.textContent = "Congratulations! " + turn + " is the winner";
					message.classList.add("you-won");
				}
			}
			if (turn == 'X'){
				board[x].classList.add("X");
				turn = 'O';
			}else{
				board[x].classList.add("O");
				turn = 'X'
			};
		});
		board[x].addEventListener('mouseover', function(){
			this.classList.add("hover");
		});
		board[x].addEventListener('mouseout', function(){
			this.classList.remove("hover");
		});
			
	};
	
};
