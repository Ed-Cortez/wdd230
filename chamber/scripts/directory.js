const requestURL = 'https://brian-ober.github.io/wdd230/chamber/directory/business.json';

async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses =jsObject['businesses'];
        console.log(businesses[0].businessname);
        businesses.forEach(displayBusinesses);
    }
}

getBusinesses(requestURL);

function displayBusinesses(item) {
    let card = document.createElement('section');
    let image =document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let tr = document.createElement('tr');
    let tbusiness = document.createElement('td');
    let taddress = document.createElement('td');
    let tphone = document.createElement('td');
    let twebsite = document.createElement('td');
    

    image.setAttribute('src', item.logo);
    image.setAttribute('alt', item.businessname);

    address.textContent = item.address;
    phone.textContent = item.phone;
    website.setAttribute('href', item.website);
    website.textContent = item.website;

    tbusiness.textContent = item.businessname;
    taddress.textContent = item.address;
    tphone.textContent = item.phone;
    twebsite.setAttribute('href', item.website);
    twebsite.textContent = item.website;


    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    tr.appendChild(tbusiness);
    tr.appendChild(taddress);
    tr.appendChild(tphone);
    tr.appendChild(twebsite);
    document.querySelector('.cards').appendChild(card);
    document.querySelector('.jsontable').appendChild(tr);
}


const date_now = new Date();
console.log(date_now)
const full_date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full'}).format(date_now)
console.log(full_date)
document.querySelector('.dateformat').textContent = full_date;

function togglemenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

let updated = document.lastModified;
document.querySelector('.lastupdated').textContent = updated;

function gridview(event) {
    document.querySelector('.cards').style.display = "flex";
    document.querySelector('.jsontable').style.display = "none";
}

function tableview(event) {
    document.querySelector('.cards').style.display = "none";
    document.querySelector('.jsontable').style.display = "block";
}

document.querySelector("#list").addEventListener("click", tableview);
document.querySelector("#gridview").addEventListener("click", gridview);