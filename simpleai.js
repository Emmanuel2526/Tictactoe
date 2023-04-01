// minimum is included, maximum is included
function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min
}
function check_unoccupied(){
	list_of_possibilities = [
	null,
	localStorage.a1,
	localStorage.b1,
	localStorage.c1,
	localStorage.a2,
	localStorage.b2,
	localStorage.c2,
	localStorage.a3,
	localStorage.b3,
	localStorage.c3
	]
	var control = true
	while(control){
		var el = getRandomInt(1,9)
		if(list_of_possibilities[el] != ""){
			//Do nothing
		}else{
			var viable = el
			control = false
		}
	}
	return viable
}

function choose_move(){
	unoccupied = check_unoccupied()
	if(unoccupied == 1){
		play_ba1()
	}else if(unoccupied == 2){
		play_bb1()
	}else if(unoccupied == 3){
		play_bc1()
	}else if(unoccupied == 4){
		play_ba2()
	}else if(unoccupied == 5){
		play_bb2()
	}else if(unoccupied == 6){
		play_bc2()
	}else if(unoccupied == 7){
		play_ba3()
	}else if(unoccupied == 8){
		play_bb3()
	}else if(unoccupied == 9){
		play_bc3()
	}
}

function first_player(){
	if(localStorage.count1.length - 2 == 0 || localStorage.count1.length - 2 == 2 || localStorage.count1.length - 2 == 4 || localStorage.count1.length - 2 == 6 || localStorage.count1.length - 2 == 8 && !game_over){
		//alert("computers turn")
		choose_move()
	}else{
	
	}
}

function second_player(){
	if(localStorage.count1.length - 2 == 1 || localStorage.count1.length - 2 == 3 || localStorage.count1.length - 2 == 5 || localStorage.count1.length - 2 == 7 && !game_over){
		//alert("computers turn")
		choose_move()
	}else{
	
	}
}
//first_player()
second_player()
//alert ("I work")