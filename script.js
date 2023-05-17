"use strict";

function shuffleArray(array) {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
}

function rating() {
	fetch("https://imdb-api.com/en/API/Top250TVs/k_w1054dsk")
		.then((res) => res.json())
		.then((data) => {
			clearProduct();
			data.items.forEach((tvShow) => {
				const crew = `<h3>${tvShow.crew}</h3>`;
				const title = `<h1>${tvShow.title}</h1>`;
				const year = `<h2>${tvShow.year}</h2>`;
				const img = `<img src=${tvShow.image}/>`;
				appendToProduct(img);
				appendToProduct(title);
				appendToProduct(year);
				appendToProduct(crew);
			});
		})
		.catch((error) => console.log(error));
}

function year() {
	fetch("https://imdb-api.com/en/API/Top250TVs/k_w1054dsk")
		.then((response) => response.json())
		.then((data) => {
			clearProduct();
			data.items.sort((a, b) => b.year.localeCompare(a.year));
			data.items.forEach((tvShow) => {
				const crew = `<h3>${tvShow.crew}</h3>`;
				const title = `<h1>${tvShow.title}</h1>`;
				const year = `<h2>${tvShow.year}</h2>`;
				const img = `<img src=${tvShow.image}/>`;
				appendToProduct(img);
				appendToProduct(title);
				appendToProduct(year);
				appendToProduct(crew);
			});
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function az() {
	fetch("https://imdb-api.com/en/API/Top250TVs/k_w1054dsk")
		.then((response) => response.json())
		.then((data) => {
			clearProduct();
			data.items.sort((a, b) => a.title.localeCompare(b.title));
			data.items.forEach((tvShow) => {
				const crew = `<h3>${tvShow.crew}</h3>`;
				const title = `<h1>${tvShow.title}</h1>`;
				const year = `<h2>${tvShow.year}</h2>`;
				const img = `<img src=${tvShow.image}/>`;
				appendToProduct(img);
				appendToProduct(title);
				appendToProduct(year);
				appendToProduct(crew);
			});
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function all() {
	fetch("https://imdb-api.com/en/API/Top250TVs/k_w1054dsk")
		.then((response) => response.json())
		.then((data) => {
			clearProduct();
			data.items = shuffleArray(data.items);

			data.items.forEach((tvShow) => {
				const crew = `<h3>${tvShow.crew}</h3>`;
				const title = `<h1>${tvShow.title}</h1>`;
				const year = `<h2>${tvShow.year}</h2>`;
				const img = `<img src=${tvShow.image}/>`;
				appendToProduct(img);
				appendToProduct(title);
				appendToProduct(year);
				appendToProduct(crew);
			});
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function clearProduct() {
	document.getElementById("product").innerHTML = "";
}

function appendToProduct(element) {
	document.getElementById("product").insertAdjacentHTML("beforeend", element);
}
