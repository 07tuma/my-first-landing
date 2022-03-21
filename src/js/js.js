let images = [{
	url: "./src/img/main/section-projects/gallery-image-1.png",
	title: "Rostov-on-Don, Admiral"
}, {
	url: "./src/img/main/section-projects/gallery-image-2.png",
	title: "Sochi Thieves"
}, {
	url: "./src/img/main/section-main/background-img.jpg",
	title: "Rostov-on-Don, Patriotic"
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

initImages();
initArrows();


if(options.dots) {
	initDots();
}

if(options.titles) {
	initTitles();
}

if(options.autoplay) {
	initAutoplay();
}

initLinks();

function initImages() {
	images.forEach((image,index) => {
let imageDiv = `<div class="image n${index} ${index === 0? "active" : ''}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
sliderImages.innerHTML += imageDiv;
})
}

function initArrows() {
	sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
		arrow.addEventListener("click", function() {
			let curNumber = +sliderImages.querySelector(".active").dataset.index;
			if (arrow.classList.contains("left")) {
				nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
			} else {
				nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
			}
			moveSlider(nextNumber);
		})
	})
}

function initLinks() {

	images.forEach((image,index) => {
let link = `<div class="slider__link-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
sliderLinks.innerHTML += link;
})

sliderLinks.querySelectorAll(".slider__link-item").forEach(link => {
	link.addEventListener("click", function() {
moveSlider(this.dataset.index);
	})
})
}

function initDots() {
	images.forEach((image,index) => {
let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
sliderDots.innerHTML += dot;
})

sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
	dot.addEventListener("click", function() {
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
	}

function initTitles() {
	let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
	sliderImages.innerHTML += titleDiv;
}

function changeTitle(num) {
	if(!images[num].title) return;
let sliderTitle = sliderImages.querySelector(".slider__images-title");
sliderTitle.innerText = images[num].title;
}

function initAutoplay() {
	setInterval(() => {
		let curNumber = +sliderImages.querySelector(".active").dataset.index;
		let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
		moveSlider(nextNumber);
	},options.autoplayInterval);
}
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