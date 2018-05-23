let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");


function changeresolutionwidth() {
	myCanvas.width = resolutionwidth.value;
}

function changeresolutionheight() {
	myCanvas.height = resolutionheight.value;
}


function drawrect() {

	usealpha = rectalpha.value / 100;

	refreshcanvas();

	ctx.beginPath();
	ctx.globalAlpha = usealpha;
	ctx.fillStyle = '#' + rectcolor.value;
	ctx.rect(rectposx.value, rectposy.value, rectwidth.value, rectheight.value);
	ctx.fill();

}

function addtext() {

	usealpha = addtextalpha.value / 100;

	refreshcanvas();

	ctx.globalAlpha = usealpha;
	ctx.font = addtextsize.value + "px " + addtextfont.value;
	ctx.fillStyle = "#" + addtextcolor.value;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(addtexttext.value, addtextposx.value, addtextposy.value);

}

function imageplacing() {

	refreshcanvas();
	ctx.globalAlpha = 1;
	ctx.drawImage(imagetocanvas, addimageposx.value, addimageposy.value, imagetocanvas.width * addimagewidth.value / 100, imagetocanvas.height * addimageheight.value / 100);


}

function addimage(e) {
	var imagereader = new FileReader();
	imagereader.onload = function(event) {
		var newimg = new Image();
		newimg.onload = function() {
			imagetocanvas = newimg;
			imageplacing();
		};
		newimg.src = event.target.result;
	};
	imagereader.readAsDataURL(e.target.files[0]);
}

// Refreshes canvas. Removes objects that are not saved.
function refreshcanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.putImageData(savedcanvas[savedcanvas.length - 1], 0, 0);
}

// Saves canvas. Pushes saved canvas to array of saved canvases.
function savecanvas() {
	var tmpvar = ctx.getImageData(0, 0, canvas.width, canvas.height);
	savedcanvas.push(tmpvar);
}

// Undo canvas background. Goes one step backwards in savedcanvas array.
function undocanvas() {
	if (savedcanvas.length > 1) {
		redocanvasa.push(savedcanvas.pop());
	}

	refreshcanvas();
}

// Redo canvas background. Goes one step onwards in savedcanvas array.
function redocanvas() {
	if (redocanvasa.length > 0) {
		savedcanvas.push(redocanvasa.pop());
	}

	refreshcanvas();
}

// Function calls savecanvas function. Save rect button calls this function.
function saverect() {
	savecanvas();
}

// Function calls savecanvas function. Save text button calls this function.
function savetext() {
	savecanvas();
}

// Function calls savecanvas function. Save image button calls this function.
function saveimage() {
	savecanvas();
}
