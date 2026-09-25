var dv = document.getElementById("content");

dv.style.opacity = 0;

var val = 0;

function timer() {
	var start = new Date(2017, 8, 26, 20, 53, 0);
	var now = new Date();

	// Use date-only values (midnight) for the Years/Months/Days count
	// so it reflects the calendar date, not the exact time-of-day.
	var startDateOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());
	var nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	var years = nowDateOnly.getFullYear() - startDateOnly.getFullYear();
	var months = nowDateOnly.getMonth() - startDateOnly.getMonth();
	var days = nowDateOnly.getDate() - startDateOnly.getDate();

	// Fix days
	if (days < 0) {
		var previousMonth = new Date(nowDateOnly.getFullYear(), nowDateOnly.getMonth(), 0);

		days += previousMonth.getDate();
		months--;
	}

	// Fix months
	if (months < 0) {
		months += 12;
		years--;
	}

	// Hours/minutes/seconds still use the real clock time for the live countup
	var hours = now.getHours() - start.getHours();
	var minutes = now.getMinutes() - start.getMinutes();
	var seconds = now.getSeconds() - start.getSeconds();

	// Fix seconds
	if (seconds < 0) {
		seconds += 60;
		minutes--;
	}

	// Fix minutes
	if (minutes < 0) {
		minutes += 60;
		hours--;
	}

	// Fix hours
	if (hours < 0) {
		hours += 24;
	}

	if (hours < 10) {
		hours = "0" + hours;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	document.getElementById("d").innerHTML = years + " Years " + months + " Months " + days + " Days";

	document.getElementById("h").innerHTML = hours;
	document.getElementById("m").innerHTML = minutes;
	document.getElementById("s").innerHTML = seconds;
}

function fadein() {
	if (val < 1) {
		val += 0.025;
		dv.style.opacity = val;
	} else {
		clearInterval(fadeinInterval);

		if (ok == 2) {
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();

setInterval(timer, 1000);

fadeInterval = setInterval(function () {
	if (ok == 2) {
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50);
