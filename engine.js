var mouseX = 0;
var mouseY = 0;
var mousePressed = false;

window.onload = function() {
	windowSetup();
	document.getElementById("gamecanvas").onmousemove = function updateMouse(event) {
		mouseX = event.pageX - event.target.getBoundingClientRect().left;
		mouseY = event.pageY - event.target.getBoundingClientRect().top;
	}
	
	document.body.onmousedown = function mouseDown(event) {
		mousePressed = true;	
	}
	
	document.body.onmouseup = function mouseUp(event) {
		mousePressed = false;	
	}
}

var key = {
	a: false,
	b: false,
	c: false,
	d: false,
	e: false,
	f: false,
	g: false,
	h: false,
	i: false,
	j: false,
	k: false,
	l: false,
	m: false,
	n: false,
	o: false,
	p: false,
	q: false,
	r: false,
	s: false,
	t: false,
	u: false,
	v: false,
	w: false,
	x: false,
	y: false,
	z: false,
	zero: false,
	one: false,
	two: false,
	three: false,
	four: false,
	five: false,
	six: false,
	seven: false,
	eight: false,
	nine: false,
	lshift: false,
	rshift: false,
	lctrl: false,
	rctrl: false,
	lalt: false,
	ralt: false,
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

window.onkeyup = function(e) {
	switch (e.getKeyCode()) {
			
	}
}

var canvasWidth, canvasHeight, ctx;

function windowSetup() {
	canvasWidth = document.getElementById("gamecanvas").width;
	canvasHeight = document.getElementById("gamecanvas").height;
	ctx = document.getElementById("gamecanvas").getContext("2d");
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