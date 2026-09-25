var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if (imageIndex >= len) {
		imageIndex = 0;
	}
}

function play() {
	if (t == 0) {
		myImage.setAttribute("src", imageArray[0]);
		myTxt.innerHTML = txtArray[0];
		imageIndex = 0;
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if (t == 0) {
		setInterval(showImage, 2500);
	}
	t++;
}

function preshowImage() {
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if (imageIndex >= len) {
		imageIndex = 0;
	}
}

function buttonFadeIn() {
	if (btnVal < 1) {
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	} else {
		clearInterval(buttonInterval);
		if (ok == 3) {
			ok += 1;
		}
	}
}

function preloadImages(callback) {
	var loadedCount = 0;
	imageArray.forEach(function (src) {
		var img = new Image();
		img.onload = img.onerror = function () {
			loadedCount++;
			if (loadedCount === imageArray.length) {
				callback();
			}
		};
		img.src = src;
	});
}

function event() {
	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function () {
		if (ok == 3) {
			setTimeout(function () {
				buttonInterval = setInterval(buttonFadeIn, 50);
			}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

preloadImages(event);
