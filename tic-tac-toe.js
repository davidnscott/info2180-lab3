window.onload=function(){
	let gameState = ["","","","","","","","",""];
	var turn = "X";
	let board = document.querySelectorAll("#board div");
	for (let x=0; x<9;x++){
		board[x].classList.add("square");
		board[x].addEventListener('click', function(){
			board[x].textContent = turn;
			gameState[x] = turn;
			if (turn == 'X'){
				board[x].classList.add("X");
				turn = 'O';
			}else{
				board[x].classList.add("O");
				turn = 'X'
			};
		});
			
	};		
};
