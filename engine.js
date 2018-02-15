var mouseX = 0;
var mouseY = 0;
var mousePressed = false;

window.onload = function() {
	windowSetup();
	canvas.onmousemove = function updateMouse(event) {
		mouseX = event.pageX - event.target.getBoundingClientRect().left;
		mouseY = event.pageY - event.target.getBoundingClientRect().top;
	}

	canvas.onmousedown = function mouseDown(event) {
		mousePressed = true;
	}

	document.body.onmouseup = function mouseUp(event) {
		mousePressed = false;
	}
}

var key = {
	a: false, b: false, c: false,
	d: false, e: false, f: false,
	g: false, h: false, i: false,
	j: false, k: false, l: false,
	m: false, n: false, o: false,
	p: false, q: false, r: false,
	s: false, t: false, u: false,
	v: false, w: false, x: false,
	y: false, z: false,
	zero: false, one: false,
	two: false, three: false,
	four: false, five: false,
	six: false, seven: false,
	eight: false, nine: false,
	lshift: false, rshift: false,
	lctrl: false, rctrl: false,
	lalt: false, ralt: false,
	tab: false,
	enter: false,
	backspace: false,
	escape: false,
	comma: false,
	period: false,
	semicolon: false,
	quote: false,
	hyphen: false,
	equals: false,
	lbracket: false,
	rbracket: false,
	backslash: false,
	forwardslash: false,
	grave: false
};

var keycode = {
	a: 0, b: 0, c: 0,
	d: 0, e: 0, f: 0,
	g: 0, h: 0, i: 0,
	j: 0, k: 0, l: 0,
	m: 0, n: 0, o: 0,
	p: 0, q: 0, r: 0,
	s: 0, t: 0, u: 0,
	v: 0, w: 0, x: 0,
	y: 0, z: 0,
	zero: 0, one: 0,
	two: 0, three: 0,
	four: 0, five: 0,
	six: 0, seven: 0,
	eight: 0, nine: 0,
	lshift: 0, rshift: 0,
	lctrl: 0, rctrl: 0,
	lalt: 0, ralt: 0,
	tab: 0,
	enter: 0,
	backspace: 0,
	escape: 0,
	comma: 0,
	period: 0,
	semicolon: 0,
	quote: 0,
	hyphen: 0,
	equals: 0,
	lbracket: 0,
	rbracket: 0,
	backslash: 0,
	forwardslash: 0,
	grave: 0
}

window.onkeyup = function(e) {
	switch (e.getKeyCode()) {

	}
}

window.onkeydown = function(e) {
	switch (e.getKeyCode()) {

	}
}

var canvas, canvasWidth, canvasHeight, ctx;

function windowSetup() {
	canvas = document.getElementById("gamecanvas");
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
	ctx = canvas.getContext("2d");
	init();
	setInterval(main, 50);
}

function background(r, g, b) {
	var pFill = ctx.fillStyle;
	fstyle(r, g, b);
	frect(0, 0, canvasWidth, canvasHeight);
	ctx.fillStyle = pFill;
}

function lstyle(r, g, b, a) {
	if (typeof a == "undefined")
		ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
	else
		ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function fstyle(r, g, b, a) {
	if (typeof a == "undefined")
		ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	else
		ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function lrect(x, y, w, h) {
	ctx.strokeRect(x, y, w, h);
}

function frect(x, y, w, h) {
	ctx.fillRect(x, y, w, h);
}

function brect(x, y, w, h) {
	ctx.fillRect(x, y, w, h);
	ctx.strokeRect(x, y, w, h);
}
