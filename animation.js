const expandCards = Array.from(document.getElementsByClassName("card"));

const expandButtons = Array.from(
	document.getElementsByClassName("expand-button")
);

expandButtons.forEach((element, index) => {
	element.addEventListener("click", (event) => {
		expandCards.forEach((card) => {
			card.classList.remove("full-card");
		});
		expandCards[index].classList.add("full-card");
	});
});
