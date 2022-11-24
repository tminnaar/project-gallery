//creates an array from the cards so we can iterate through the index.
const expandCards = Array.from(document.getElementsByClassName("card"));
//creates an array from the buttons so we can iterate through the index.
const expandButtons = Array.from(document.getElementsByClassName("expand-button"));

//adds .show-overlay class to the card of the button clicked and removes it from the rest &
//contextually changes button text.
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
