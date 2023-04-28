// Select the HTML element to manipulate
const date = document.querySelector("#date");
// Try to complete the method with options
try {
	const options = {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric"
	};
	date.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}

