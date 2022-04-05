let images = [{
	url: "./src/img/main/section-projects/gallery-image-1.png",
	title: "Rostov-on-Don, Admiral",
}, {
	url: "./src/img/main/section-projects/gallery-image-2.png",
	title: "Sochi Thieves",
	}, {
	url: "./src/img/main/section-projects/gallery-image-3.png",
	title: "Rostov-on-Don, Patriotic",
	}];

function initSlider(options) {
	if (!images || !images.length) return;

	options = options || {
		titles: false,
		dots: true,
		autoplay: false
	};

	let sliderImages = document.querySelector(".slider__images");
	let sliderArrows = document.querySelector(".slider__arrows")
	let sliderDots = document.querySelector(".slider__dots")
	let sliderLinks = document.querySelector(".slider__links")
	let sliderParameters = document.querySelector(".parameters-box")
	
	let city = document.getElementById('city');
	let time = document.getElementById('time');
	let area = document.getElementById('area');
	let cost = document.getElementById('cost');

	initImages();
	initArrows();


	if (options.dots) {
		initDots();
	}

	if (options.titles) {
		initTitles();
	}

	if (options.autoplay) {
		initAutoplay();
	}

	initLinks();

	initParameters();

	function initImages() {
		images.forEach((image, index) => {
			let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ''}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
			sliderImages.innerHTML += imageDiv;
		})
	}

	function initArrows() {
		sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
			arrow.addEventListener("click", function () {
				let curNumber = +sliderImages.querySelector(".active").dataset.index;
				if (arrow.classList.contains("left")) {
					nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
				} else {
					nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
			})
		})
	}

	function initParameters() {
		images.forEach((image, index) => {
			let curNumber = +sliderImages.querySelector(".active").dataset.index;
			if (curNumber === 0) {
				city.innerHTML = '<p>Rostov-on-Don, Admiral</p>';
				time.innerHTML = '<p>3.5 months</p>';
				area.innerHTML = '<p>81 m2</p>';
				cost.innerHTML = '<p>Upon request</p>';
			} else if (curNumber === 1) {
				city.innerHTML = '<p>Sochi Thieves</p>';
				time.innerHTML = '<p>4 months</p>';
				area.innerHTML = '<p>105 m2</p>';
				cost.innerHTML = '<p>Upon request</p>';
			} else if (curNumber === 2) {
				city.innerHTML = '<p>Rostov-on-Don, Patriotic</p>';
				time.innerHTML = '<p>3 months</p>';
				area.innerHTML = '<p>93 m2</p>';
				cost.innerHTML = '<p>Upon request</p>';
			}
			
		})
	}

	function initLinks() {

		images.forEach((image, index) => {
			let link = `<div class="slider__link-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
			sliderLinks.innerHTML += link;
		})

		sliderLinks.querySelectorAll(".slider__link-item").forEach(link => {
			link.addEventListener("click", function () {
				moveSlider(this.dataset.index);
			})
		})
	}

	function initDots() {
		images.forEach((image, index) => {
			let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
			sliderDots.innerHTML += dot;
		})

		sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
			dot.addEventListener("click", function () {
				moveSlider(this.dataset.index);
			})
		})
	}

	function moveSlider(num) {
		sliderImages.querySelector(".active").classList.remove("active");
		sliderImages.querySelector(".n" + num).classList.add("active");
		sliderLinks.querySelector(".active").classList.remove("active");
		sliderLinks.querySelector(".n" + num).classList.add("active");

		if (options.dots) {
			sliderDots.querySelector(".active").classList.remove("active");
			sliderDots.querySelector(".n" + num).classList.add("active");
		}
		if (options.titles) changeTitle(num);
		initParameters();
	}

	function initTitles() {
		let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
		sliderImages.innerHTML += titleDiv;
	}

	function changeTitle(num) {
		if (!images[num].title) return;
		let sliderTitle = sliderImages.querySelector(".slider__images-title");
		sliderTitle.innerText = images[num].title;
	}

	function initAutoplay() {
		setInterval(() => {
			let curNumber = +sliderImages.querySelector(".active").dataset.index;
			let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
			moveSlider(nextNumber);
		}, options.autoplayInterval);
	}

	let winSize = innerWidth;

let needWidth = winSize / 2;
let needWidthMobile = winSize - 36;
let needHeight = winSize / 1.5;

console.log(needWidthMobile);

let changeSize = function() {
	if (winSize <1440 && winSize >1024){
	sliderImages.style.width= `${needWidth}px`;
} else if (winSize <=768) {
	sliderImages.style.width= `${needWidthMobile}px`;
	sliderImages.style.height= `${needHeight}px`;
}
}

changeSize();
}

let sliderOptions = {
	titles: false,
	dots: true,
	autoplay: false,
	autoplayInterval: 3000
}

document.addEventListener("DOMContentLoaded", () => {
	initSlider(sliderOptions);
});


