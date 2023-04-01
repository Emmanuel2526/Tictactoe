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


function react(){
		list_of_player_strings = [
		localStorage.ai_string,
		localStorage.player_string
		]
	var result = false
	for(var i = 0; i < 2; i++) {
		if(localStorage.a1 == localStorage.b1 && localStorage.b1 == list_of_player_strings[i] && !game_over && localStorage.b1 != "" && localStorage.c1 == ""){
			play_bc1()
			var result = true
			break
		}else if(localStorage.a1 == localStorage.c1 && localStorage.c1 == list_of_player_strings[i] && !game_over && localStorage.c1 != "" && localStorage.b1 == ""){
			play_bb1()
			var result = true
			break
		}else if(localStorage.b1 == localStorage.c1 && localStorage.c1 == list_of_player_strings[i] && !game_over && localStorage.c1 != "" && localStorage.a1 == ""){
			play_ba1()
			var result = true
			break
		}else if(localStorage.a2 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.c2 == ""){
			play_bc2()
			var result = true
			break
		}else if(localStorage.a2 == localStorage.c2 && localStorage.c2 == list_of_player_strings[i] && !game_over && localStorage.c2 != "" && localStorage.b2 == ""){
			play_bb2()
			var result = true
			break
		}else if(localStorage.b2 == localStorage.c2 && localStorage.c2 == list_of_player_strings[i] && !game_over && localStorage.c2 != "" && localStorage.a2 == ""){
			play_ba2()
			var result = true
			break
		}else if(localStorage.a3 == localStorage.b3 && localStorage.b3 == list_of_player_strings[i] && !game_over && localStorage.b3 != "" && localStorage.c3 == ""){
			play_bc3()
			var result = true
			break
		}else if(localStorage.a3 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.b3 == ""){
			play_bb3()
			var result = true
			break
		}else if(localStorage.b3 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.a3 == ""){
			play_ba3()
			var result = true
			break
		}else if(localStorage.a1 == localStorage.a2 && localStorage.a2 == list_of_player_strings[i] && !game_over && localStorage.a2 != "" && localStorage.a3 == ""){
			play_ba3()
			var result = true
			break
		}else if(localStorage.a1 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.a2 == ""){
			play_ba2()
			var result = true
			break
		}else if(localStorage.a2 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.a1 == ""){
			play_ba1()
			var result = true
			break
		}else if(localStorage.b1 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.b3 == ""){
			play_bb3()
			var result = true
			break
		}else if(localStorage.b1 == localStorage.b3 && localStorage.b3 == list_of_player_strings[i] && !game_over && localStorage.b3 != "" && localStorage.b2 == ""){
			play_bb2()
			var result = true
			break
		}else if(localStorage.b2 == localStorage.b3 && localStorage.b3 == list_of_player_strings[i] && !game_over && localStorage.b3 != "" && localStorage.b1 == ""){
			play_bb1()
			var result = true
			break
		}else if(localStorage.c1 == localStorage.c2 && localStorage.c2 == list_of_player_strings[i] && !game_over && localStorage.c2 != "" && localStorage.c3 == ""){
			play_bc3()
			var result = true
			break
		}else if(localStorage.c1 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.c2 == ""){
			play_bc2()
			var result = true
			break
		}else if(localStorage.c2 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.c1 == ""){
			play_bc1()
			var result = true
			break
		}else if(localStorage.a1 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.c3 == ""){
			play_bc3()
			var result = true
			break
		}else if(localStorage.a1 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.b2 == ""){
			play_bb2()
			var result = true
			break
		}else if(localStorage.b2 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.a1 == ""){
			play_ba1()
			var result = true
			break
		}else if(localStorage.c1 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.a3 == ""){
			play_ba3()
			var result = true
			break
		}else if(localStorage.c1 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.b2 == ""){
			play_bb2()
			var result = true
			break
		}else if(localStorage.b2 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.c1 == ""){
			play_bc1()
			var result = true
			break
		}else{
			//Do nothing
		}
	}
	if(!result){
		choose_move()
	}else{
		//Do nothing 
	}
}

function first_player(){
	if(localStorage.count1.length - 2 == 0 && localStorage.v == "O"){		
		localStorage.player_string = "X"
		localStorage.ai_string = "O"
	}else if(localStorage.count1.length - 2 == 0 && localStorage.v == "X"){		
		localStorage.player_string = "O"
		localStorage.ai_string = "X"
	}else{
		//Do nothing 
	}
	if(localStorage.count1.length - 2 == 0 || localStorage.count1.length - 2 == 2 && !game_over){
		//alert("computers turn")
		choose_move()
	}else if( localStorage.count1.length - 2 == 4 || localStorage.count1.length - 2 == 6 || localStorage.count1.length - 2 == 8 && !game_over){
		//alert("computers turn")
		react()
	}else{
		//Do nothing
	}
}

function second_player(){
	if(localStorage.count1.length - 2 == 1 && !game_over){
		//alert("computers turn")
		choose_move()
	}else if(localStorage.count1.length - 2 == 3 || localStorage.count1.length - 2 == 5 || localStorage.count1.length - 2 == 7 && !game_over){
		//alert("computers turn")
		react()
	}else{
		//Do nothing
	}
}

//first_player()
//second_player()
//alert ("I work")