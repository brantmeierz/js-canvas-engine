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
