var x = 0;
var y = 0;
var w = 10;
var h = 10;
var state = 0;

//function init() {

//}

function keyPressed() {
	
}

function main() {
	if (keyDown.up) {
		console.log("UP");
	}
	if (keyDown.down) {
		console.log("DOWN");
	}
	if (keyDown.left) {
		console.log("LEFT");
	}
	if (keyDown.right) {
		console.log("RIGHT");
	}
	if (mouse.left) {
		console.log("MOUSEL");
	}
	if (mouse.mid) {
		console.log("MOUSEM");
	}
	if (mouse.right) {
		console.log("MOUSER");
	}
	//console.log(mouse.x + " " + mouse.y);
	background(50, 50, 50);
	fstyle(255, 0, 0);
	if (state == 0) {
		x++;
		y++;
	} else if (state == 1) {
		x++;
		y--;
	} else if (state == 2) {
		x--;
		y--;
	} else if (state == 3) {
		x--;
		y++;
	}
	if (y + h > canvasHeight) {
		if (state == 0) {
			state = 1;
		} else if (state == 3) {
			state = 2;
		}
	} else if (y < 0) {
		if (state == 1) {
			state = 0;
		} else if (state == 2) {
			state = 3;
		}
	} else if (x + w > canvasWidth) {
		if (state == 0) {
			state = 3;
		} else if (state == 1) {
			state = 2;
		}
	} else if (x < 0) {
		if (state == 3) {
			state = 0;
		} else if (state == 2) {
			state = 1;
		}
	}
	frect(x, y, w, h);
}

var m = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];

function fun(m, s) {
	for (var i = 0; i < s.length; i++) {
		var r = parseInt(s.charAt(i));
		var c = parseInt(s.charAt(i - 1));
		m[r][c]++;
	}
}

function runCode() {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			m[i][j] = 0;
		}
	}
	var s = "20012002";
	fun(m, s);
	var sum = 0;
	for (var k = 0; k < 10; k++) {
		sum += m[k][k];
	}
	console.log(sum);
}
