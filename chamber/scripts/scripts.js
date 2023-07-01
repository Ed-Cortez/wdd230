

function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")

x.onclick = toggleMenu;


/* CURRENT DATE */

// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");
// for european/family history format with day first.
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// "full" or long, medium, short options ... try them

datefield.textContent = fulldate;
datemessage.innerHTML = `Today is <strong>${fulldate}</strong>. What are you going to do?`;






// Banner showing only Mondays and Tuesdays
const banner = document.getElementById("banner");

const today = new Date().getDay();

if (today === 1 || today === 2) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}




/* LAST UPDATE DATE */

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





