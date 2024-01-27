let cells = [1, 0, 0, 1, 0, 1, 0, 1, 1, 0];

let w = 40;

function setup(){
	createCanvas(400, 400);
}



function draw() {
	background(255)
	for (let i = 0; i < cells.length; i++) {
		let x = i * w;
		stroke(0);
		fill(255, cells[i] * 255);
		square(x, 0, w);

	
}

	let nextCells = [];

	for (let i = 0; i < cells.length; i++){
		let left = cells[i - 1];
		let right = cells[i + 1];
		let state = cells[i];
		let newState = calculateState(left, right, state);
		nextCells[i] = newState;
	}

}

function calculateState(a, b, c) {
	if (a === 0 && b === 0 & c === 0) return 0;
	if (a === 1 && b === 1 & c === 1) return 1; // 111
	if (a === 1 && b === 1 & c === 0) return 1; // 110
	if (a === 1 && b === 0 & c === 0) return 0; // 
	if (a === 0 && b === 0 & c === 0) return 0;
	if (a === 0 && b === 0 & c === 0) return 0;
	if (a === 0 && b === 0 & c === 0) return 0;
	if (a === 0 && b === 0 & c === 0) return 0;
	if (a === 0 && b === 0 & c === 0) return 0;


}