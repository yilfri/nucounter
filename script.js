const cowntdown = document.getElementById('cowntdown');

let countDownDate = new Date('Sep 1, 2022 17:00:00').getTime();
console.log(countDownDate);

// Update the count down every 1 second
let x = setInterval(function () {
	// Get today's date and time
	let now = new Date().getTime();

	// Find the distance between now and the count down date
	let distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	cowntdown.innerHTML = `<h3>${days}d ${hours}h ${minutes}m ${seconds}s</h3>`;

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		cowntdown.innerHTML = 'Ya no eres un esclavo';
	}
}, 1000);
