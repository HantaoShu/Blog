var num = new Array();
for(var i = 0;i < 4;i++){
	num[i] = new Array();
}
var remainNum = 16;
var score;
var colors  = ["#bbada0","#eee4da","#ede0c8","#f2b179","#f59563","#f67c5f","#f65e3b","#edcf72","#edcc61","#edc850","#edc53f","#edc22e","#3c3a32"]

var random_2_4 = function(){
	return Math.random() < 0.8 ? 2 : 4;
}

var random_x = function(n){
	return Math.floor(Math.random() * n);
}

var randomAddOne = function(){
	if(remainNum <= 0) return;
	var pos = random_x(remainNum);
	var tempNum = random_2_4();
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			if(num[i][j] == 0){
				pos--;
				if(pos == -1){
					num[i][j] = tempNum;
					remainNum--;
					break;
				}
			}
		}
	}
}

var init = function(){
	score = 0;
	remainNum = 16;
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			num[i][j] =0;
		}
	}
	randomAddOne();
	randomAddOne();
	show();
}

var up = function(){
	var move = false;
	for(var j = 0;j < 4;j++){
		var flag = 0, count = 0;
		var list = [0,0,0,0];
		for(var i = 0;i < 4;i++){
			if(num[i][j] != 0){
				if(flag == 0){
					list[count++] = flag = num[i][j];
					if(count-1 != i) move = true;
				}
				else if(flag == num[i][j]){
					list[count-1] *= 2;
					score += flag * 2;
					flag = 0;
					remainNum++;
					move = true;
				}
				else{
					list[count++] = flag = num[i][j];
					if(count-1 != i) move = true;
				}
			}
		}
		for(var i = 0;i <4;i++){
			num[i][j] = list[i];
		}
	}
	if(move) randomAddOne();
}

var down = function(){
	var move = false;
	for(var j = 0;j < 4;j++){
		var flag = 0, count = 3;
		var list = [0,0,0,0];
		for(var i = 3;i >= 0;i--){
			if(num[i][j] != 0){
				if(flag == 0){
					list[count--] = flag = num[i][j];
					if(count+1 != i) move = true;
				}
				else if(flag == num[i][j]){
					list[count+1] *= 2;
					score += flag * 2;
					flag = 0;
					remainNum++;
					move = true;
				}
				else{
					list[count--] = flag = num[i][j];
					if(count+1 != i) move = true;
				}
			}
		}
		for(var i = 0;i < 4;i++){
			num[i][j] = list[i];
		}
	}
	if(move) randomAddOne();
}

var left = function(){
	var move = false;
	for(var i = 0;i < 4;i++){
		var flag = 0, count = 0;
		var list = [0,0,0,0];
		for(var j = 0;j < 4;j++){
			if(num[i][j] != 0){
				if(flag == 0){
					list[count++] = flag = num[i][j];
					if(count-1 != j) move = true;
				}
				else if(flag == num[i][j]){
					list[count-1] *= 2;
					score += flag * 2;
					flag = 0;
					remainNum++;
					move = true;
				}
				else{
					list[count++] = flag = num[i][j];
					if(count-1 != j) move = true;
				}
			}
		}
		for(var j = 0;j < 4;j++){
			num[i][j] = list[j];
		}
	}
	if(move) randomAddOne();
}

var right = function(){
	var move = false;
	for(var i = 0;i < 4;i++){
		var flag = 0, count = 3;
		var list = [0,0,0,0];
		for(var j = 3;j >= 0;j--){
			if(num[i][j] != 0){
				if(flag == 0){
					list[count--] = flag = num[i][j];
					if(count+1 != j) move = true;
				}
				else if(flag == num[i][j]){
					list[count+1] *= 2;
					score += flag * 2;
					flag = 0;
					remainNum++;
					move = true;
				}
				else{
					list[count--] = flag = num[i][j];
					if(count+1 != j) move = true;
				}
			}
		}
		for(var j = 0;j < 4;j++){
			num[i][j] = list[j];
		}
	}
	if(move) randomAddOne();
}

window.onkeydown = function(e){
	var keyCode;
	if(!e) e = window.event;
	if(document.all) keyCode = e.keyCode;
	else keyCode = e.which;

	// ← 或 A
	if(keyCode == 37 || keyCode == 65){
		left();
	}
	// ↑ 或 W
	if(keyCode == 38 || keyCode == 87){
		up();
	}
	// → 或 D
	if(keyCode == 39 || keyCode == 68){
		right();
	}
	// ↓ 或 S
	if(keyCode == 40 || keyCode == 83){
		down();
	}
	show();
	if(!moveJudge()){
		show();
		var mymessage = confirm("游戏结束 ！");
		if(mymessage == true) init();
	}
}

var moveJudge = function(){
	//判断游戏是否结束
	if(remainNum > 0) return true;
	for(var i = 0;i < 3;i++){
		for(var j = 0;j < 3;j++){
			if(num[i][j] == num[i][j+1] || num[i][j] == num[i+1][j]) return true;
		}
	}
	for(var i = 0;i < 3;i++){
		if(num[i][3] == num[i+1][3] || num[3][i] == num[3][i+1]) return true;
	}
	return false;
}

var show = function(){
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			var numKey = i * 4 + j;
			if(num[i][j] == 0){
				$("#box" + numKey).text("");
				$("#box" + numKey).css("background","rgba(238, 228, 218, 0.35)");
			}
			else{
				var x = Math.log(num[i][j])/Math.log(2);
				if(x > 12) x == 12;
				(x > 2) ? $("#box" + numKey).css("color","#f9f6f2") : $("#box" + numKey).css("color","#776e65")
				$("#box" + numKey).css("background",colors[x]);
				(x > 9) ? $("#box" + numKey).css("font-size","45px") : $("#box" + numKey).css("font-size","55px")
				$("#box" + numKey).text(num[i][j]);
			}
			$("#score-container").text(score);
		}
	}
}