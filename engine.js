var mouse = {
		x: false,
		y: false,
		left: false,
		mid: false,
		right: false
};

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
	ctrl: false,
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
	backspace: 8,
	tab: 9,
	enter: 13,
	shift: 16,
	ctrl: 17,
	alt: 18,
	pausebreak: 19,
	capslock: 20,
	escape: 27,
	pageup: 33,
	pagedown: 34,
	end: 35,
	home: 36,
	left: 37,
	up: 38,
	right: 39,
	down: 40,
	insert: 45,
	delete: 46,
	zero: 48, 
	one: 49,
	two: 50, 
	three: 51,
	four: 52, 
	five: 53,
	six: 54, 
	seven: 55,
	eight: 56, 
	nine: 57,
	a: 65, 
	b: 66, 
	c: 67,
	d: 68, 
	e: 69, 
	f: 70,
	g: 71, 
	h: 72, 
	i: 73,
	j: 74, 
	k: 75, 
	l: 76,
	m: 77, 
	n: 78, 
	o: 79,
	p: 80, 
	q: 81, 
	r: 82,
	s: 83, 
	t: 84, 
	u: 85,
	v: 86, 
	w: 87, 
	x: 88,
	y: 89, 
	z: 90,
	lwindows: 91, 
	rwindows: 92,
	select: 93,
	num0: 96,
	num1: 97,
	num2: 98,
	num3: 99,
	num4: 100,
	num5: 101,
	num6: 102,
	num7: 103,
	num8: 104,
	num9: 105,
	multiply: 106,
	add: 107,
	subtract: 109,
	decimal: 110,
	divide: 111,
	f1: 112,
	f2: 113,
	f3: 114,
	f4: 115,
	f5: 116,
	f6: 117,
	f7: 118,
	f8: 119,
	f9: 120,
	f10: 121,
	f11: 122,
	f12: 123,
	numlock: 144,
	scrolllock: 145,
	semicolon: 186,
	equals: 187,
	comma: 188,
	period: 0,
	quote: 0,
	hyphen: 0,
	equals: 0,
	lbracket: 0,
	rbracket: 0,
	backslash: 0,
	forwardslash: 0,
	grave: 0,
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
