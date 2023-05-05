
const date = document.querySelector("#date");

try {
	const options = {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric"
	};
	date.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	alert("Date not displayed, the browser may not support it");
}
