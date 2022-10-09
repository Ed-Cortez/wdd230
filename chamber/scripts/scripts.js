

const hamburger = document.querySelector('.menubutton');
const datefield = document.querySelector('.date');
const actualYear = document.getElementById('actual-year');


const now = new Date();
const fulldate = new Intl.DateTimeFormat('en-UK', {
  dateStyle: 'full',
}).format(now);
datefield.innerHTML = `${fulldate}`;


const lastMod = new Date(document.lastModified);
const currentYear = now.getFullYear();
document.getElementById('actual-year').textContent = currentYear;
document.getElementById('last-modi').textContent = document.lastModified;


function toggleMenu() {
  document.getElementById('menu-list').classList.toggle('open');
  document.querySelector('.menubutton').classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
