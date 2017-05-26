function zadanie() {
	var a = prompt("Podaj a:"),
		b = prompt("Podaj b:"),
		value = (a * a) + (2 * a * b) - (b * b);

	console.log("(a * a) + (2 * a * b) - (b * b) = " + value);
	console.log("a = " + a);
	console.log("b = " + b);

	if (value > 0) {
		console.log("Wynik jest większy od zera")
	} else if (value < 0) {
		console.log("Wynik jest mniejszy od zera")
	} else {
		console.log("Wynik jest równy zero")
	}
}

zadanie();