const expandCards = Array.from(document.getElementsByClassName("card"));

const expandButtons = Array.from(document.getElementsByClassName("expand-button"));

expandButtons.forEach((element, index) => {
	element.addEventListener("click", (event) => {
		expandCards.forEach((card, cardIndex) => {
			const button = card.querySelector("button");
			if (cardIndex === index && !card.classList.contains("show-overlay")) {
				card.classList.add("show-overlay");
				button.textContent = "- See Less";
			} else {
				card.classList.remove("show-overlay");
				button.textContent = "+ See More";
				button.style.borderRadius = "0";
			}
		});
	});
});
