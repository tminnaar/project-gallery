const expandCards = Array.from(document.getElementsByClassName("card"));

const expandButtons = Array.from(document.getElementsByClassName("expand-button"));

expandButtons.forEach((element, index) => {
	element.addEventListener("click", (event) => {
		expandCards.forEach((card, cardIndex) => {
			const button = card.querySelector("button");
			if (cardIndex === index && !card.classList.contains("full-card")) {
				card.classList.add("full-card");
				button.textContent = "- Collapse";
			} else {
				card.classList.remove("full-card");
				button.textContent = "+ Expand";
				button.style.borderRadius = "0";
			}
		});
	});
});
