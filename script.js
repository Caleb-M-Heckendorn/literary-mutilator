function replacer(){
	let nopeWords = document.getElementById("tacos").textContent;
	let words = {
		"taco": "wonton",
		"tacos": "wontons",
		"Tacos": "Wontons",
		"burrito": "egg roll",
		"quesadilla": "bowl of fried rice"
	};
	nopeWords = nopeWords.replace(/taco|burrito|quesadilla/gi, function(matched) {
		return words[matched];
	});
	document.getElementById("tacos").innerHTML = nopeWords
}

function highlighter() {
	let text = document.getElementById("search").value;
	let query = new RegExp("(\\b" + text + "\\b)", "gim");
	let highlighted = document.getElementById("highlighted").innerHTML;
	let wordsToHighlight = highlighted.replace(/(<span>|<\/span>)/igm, "");
	document.getElementById("highlighted").innerHTML = wordsToHighlight;
	let boi = wordsToHighlight.replace(query, "<span>$1</span></span>");
	document.getElementById("highlighted").innerHTML = boi;

}