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
	alert("Something Random is happening ")
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

//Start
//nrr →non random random
//for second player
function nrr_check_unoccupied(){
	nrr_list_of_possibilities = [
	null,
	localStorage.a1,
	localStorage.c1,
	localStorage.a3,
	localStorage.c3
	]
	var nrr_control = true
	while(nrr_control){
		var nrr_el = getRandomInt(1,4)
		if(nrr_list_of_possibilities[nrr_el] != ""){
			//Do nothing
		}else{
			var nrr_viable = nrr_el
			nrr_control = false
		}
	}
	return nrr_viable
}

function nrr_choose_move(){
	nrr_unoccupied = nrr_check_unoccupied()
	if(nrr_unoccupied == 1){
		play_ba1()
	}else if(nrr_unoccupied == 2){
		play_bc1()
	}else if(nrr_unoccupied == 3){
		play_ba3()
	}else if(nrr_unoccupied == 4){
		play_bc3()
	}
}
//End
//start
function nrrr_check_unoccupied(){
	nrrr_list_of_possibilities = [
	null,
	localStorage.a2,
	localStorage.b1,
	localStorage.b3,
	localStorage.c2
	]
	var nrrr_control = true
	while(nrrr_control){
		var nrrr_el = getRandomInt(1,4)
		if(nrrr_list_of_possibilities[nrrr_el] != ""){
			//Do nothing
		}else{
			var nrrr_viable = nrrr_el
			nrrr_control = false
		}
	}
	return nrrr_viable
}

function nrrr_choose_move(){
	nrrr_unoccupied = nrrr_check_unoccupied()
	if(nrrr_unoccupied == 1){
		play_ba2()
	}else if(nrrr_unoccupied == 2){
		play_bb1()
	}else if(nrrr_unoccupied == 3){
		play_bb3()
	}else if(nrrr_unoccupied == 4){
		play_bc2()
	}
}
//End
//Second sub
//Start2
function nr_choose_move(){
	//alert("this nr_choose_move function works")
	if(localStorage.a2 == localStorage.b1 && localStorage.b1 == localStorage.player_string && !game_over && localStorage.a1 != localStorage.player_string && localStorage.a1 !=  localStorage.ai_string){
		play_ba1()
	}else if(localStorage.b1 == localStorage.c2 && localStorage.c2 == localStorage.player_string && !game_over && localStorage.c1 != localStorage.player_string && localStorage.c1 !=  localStorage.ai_string){
		play_bc1()
	}else if(localStorage.a2 == localStorage.b3 && localStorage.b3 == localStorage.player_string && !game_over && localStorage.a3 != localStorage.player_string && localStorage.a3 !=  localStorage.ai_string){
		play_ba3()
	}else if(localStorage.b3 == localStorage.c2 && localStorage.c2 == localStorage.player_string && !game_over && localStorage.c3 != localStorage.player_string && localStorage.c3 !=  localStorage.ai_string){
		//alert("Finally, the problem")
		//I cannot believe this programme has been failing cause I forgot to put b somewhere
		play_bc3()
	}else{
		//Hmmmm
		//alert(" I am playing a random move, please inform developer")
		choose_move()
	}
}
//End2

function non_ran_cmove_cenoc(){
	//alert("this non_ran_cmove_cenoc function works")
	if(localStorage.con == "con1"){
		if(localStorage.a1 == localStorage.c3 && localStorage.c3 == "" && !game_over){
			play_bc3()
		}else if(localStorage.c1 == localStorage.a3 && localStorage.a3 == "" && !game_over){
			play_ba3()
		}else if(localStorage.b1 == localStorage.b3 && localStorage.b3 == "" && !game_over){
			play_bb3()
		}else if(localStorage.a2 == localStorage.c2 && localStorage.c2 == "" && !game_over){
			play_bc2()
		}else{
			//Probably not going to happen
			nr_choose_move()
		}
	}else if(localStorage.con == "con2"){
		if(localStorage.b1 == localStorage.b3 && localStorage.b3 == "" && !game_over){
			play_bb3()
		}else if(localStorage.a2 == localStorage.c2 && localStorage.c2 == "" && !game_over){
			play_bc2()
		}else if(localStorage.a1 == localStorage.c3 && localStorage.c3 == "" && !game_over){
			play_bc3()
		}else if(localStorage.c1 == localStorage.a3 && localStorage.a3 == "" && !game_over){
			play_ba3()
		}else{
			//alert("It happened")
			//Probably not going to happen
			nr_choose_move()
		}
	}else{
		nr_choose_move()
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
			result = true
			break
		}else if(localStorage.a1 == localStorage.c1 && localStorage.c1 == list_of_player_strings[i] && !game_over && localStorage.c1 != "" && localStorage.b1 == ""){
			play_bb1()
			result = true
			break
		}else if(localStorage.b1 == localStorage.c1 && localStorage.c1 == list_of_player_strings[i] && !game_over && localStorage.c1 != "" && localStorage.a1 == ""){
			play_ba1()
			result = true
			break
		}else if(localStorage.a2 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.c2 == ""){
			play_bc2()
			result = true
			break
		}else if(localStorage.a2 == localStorage.c2 && localStorage.c2 == list_of_player_strings[i] && !game_over && localStorage.c2 != "" && localStorage.b2 == ""){
			play_bb2()
			result = true
			break
		}else if(localStorage.b2 == localStorage.c2 && localStorage.c2 == list_of_player_strings[i] && !game_over && localStorage.c2 != "" && localStorage.a2 == ""){
			play_ba2()
			result = true
			break
		}else if(localStorage.a3 == localStorage.b3 && localStorage.b3 == list_of_player_strings[i] && !game_over && localStorage.b3 != "" && localStorage.c3 == ""){
			play_bc3()
			result = true
			break
		}else if(localStorage.a3 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.b3 == ""){
			play_bb3()
			result = true
			break
		}else if(localStorage.b3 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.a3 == ""){
			play_ba3()
			result = true
			break
		}else if(localStorage.a1 == localStorage.a2 && localStorage.a2 == list_of_player_strings[i] && !game_over && localStorage.a2 != "" && localStorage.a3 == ""){
			play_ba3()
			result = true
			break
		}else if(localStorage.a1 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.a2 == ""){
			play_ba2()
			result = true
			break
		}else if(localStorage.a2 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.a1 == ""){
			play_ba1()
			result = true
			break
		}else if(localStorage.b1 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.b3 == ""){
			play_bb3()
			result = true
			break
		}else if(localStorage.b1 == localStorage.b3 && localStorage.b3 == list_of_player_strings[i] && !game_over && localStorage.b3 != "" && localStorage.b2 == ""){
			play_bb2()
			result = true
			break
		}else if(localStorage.b2 == localStorage.b3 && localStorage.b3 == list_of_player_strings[i] && !game_over && localStorage.b3 != "" && localStorage.b1 == ""){
			play_bb1()
			result = true
			break
		}else if(localStorage.c1 == localStorage.c2 && localStorage.c2 == list_of_player_strings[i] && !game_over && localStorage.c2 != "" && localStorage.c3 == ""){
			play_bc3()
			result = true
			break
		}else if(localStorage.c1 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.c2 == ""){
			play_bc2()
			result = true
			break
		}else if(localStorage.c2 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.c1 == ""){
			play_bc1()
			result = true
			break
		}else if(localStorage.a1 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.c3 == ""){
			play_bc3()
			result = true
			break
		}else if(localStorage.a1 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.b2 == ""){
			play_bb2()
			result = true
			break
		}else if(localStorage.b2 == localStorage.c3 && localStorage.c3 == list_of_player_strings[i] && !game_over && localStorage.c3 != "" && localStorage.a1 == ""){
			play_ba1()
			result = true
			break
		}else if(localStorage.c1 == localStorage.b2 && localStorage.b2 == list_of_player_strings[i] && !game_over && localStorage.b2 != "" && localStorage.a3 == ""){
			play_ba3()
			result = true
			break
		}else if(localStorage.c1 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.b2 == ""){
			play_bb2()
			result = true
			break
		}else if(localStorage.b2 == localStorage.a3 && localStorage.a3 == list_of_player_strings[i] && !game_over && localStorage.a3 != "" && localStorage.c1 == ""){
			play_bc1()
			result = true
			break
		}else{
			//Do nothing
			//alert("I did nothing")
		}
	}
	if(!result){
		//alert("The if statement works ")
		non_ran_cmove_cenoc()
	}else{
		//Do nothing 
	}
}

function stupid_move(){
	if((localStorage.b1 == localStorage.b3 && localStorage.b3 == localStorage.player_string) || (localStorage.a2 == localStorage.c2 && localStorage.c2 == localStorage.player_string)){
		nrr_choose_move()
	}else if((localStorage.a1 == localStorage.c3 && localStorage.c3 == localStorage.player_string) || (localStorage.c1 == localStorage.a3 && localStorage.a3 == localStorage.player_string)){
		nrrr_choose_move()
	}else{
		react()
	}
}

function check_config(){
	if(localStorage.a1 != "" || localStorage.c1 != "" || localStorage.a3 != "" || localStorage.c3 != ""){
		localStorage.con = "con1"
	}else if(localStorage.a2 != "" || localStorage.b1 != "" || localStorage.c2 != "" || localStorage.b3 != ""){
		localStorage.con = "con2"
	}else{
		//Do Nothing 
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
	if(localStorage.count1.length - 2 == 0  && !game_over){
		//alert("computers turn")
		play_bb2()
	}if(localStorage.count1.length - 2 == 2 && !game_over){
		//alert("computers turn")
		check_config()
		non_ran_cmove_cenoc()
	}else if( localStorage.count1.length - 2 == 4 || localStorage.count1.length - 2 == 6 || localStorage.count1.length - 2 == 8 && !game_over){
		//alert("computers turn")
		react()
	}else{
		//Do nothing
	}
}

function second_player(){
	if(localStorage.count1.length - 2 == 1 && !game_over){
		if(localStorage.b2 == ""){
			play_bb2()
		}else{
			//alert("computers turn")
			check_config()
			//nr_choose_move()
			nrr_choose_move()
		}
	}else if(localStorage.count1.length - 2 == 3){
	//A function will be here
	stupid_move()
	}else if(localStorage.count1.length - 2 == 5 || localStorage.count1.length - 2 == 7 && !game_over){
		//alert("computers turn")
		react()
	}else{
		//Do nothing
	}
}

//first_player()
second_player()
//alert ("I work")