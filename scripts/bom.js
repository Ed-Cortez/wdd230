const warning = document.createElement("div")
const ul = document.getElementsByClassName('list');

document.getElementsByTagName("button")[0].addEventListener('click', () => {

  const bookChapter = document.getElementsByTagName("input")[0].value;
  document.getElementsByTagName("input")[0].value = '';

  if (bookChapter) {
    document.getElementsByTagName("label")[0].style.color = "black";

    const value3 = bookChapter.value;
    console.log(value3);
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
  
    listItem.appendChild(listText);
    listText.textContent = bookChapter;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    ul[0].appendChild(listItem);

    listBtn.addEventListener('click', () => {
    ul[0].removeChild(listItem);
    document.getElementById("chapter").focus();
    });
  } else {
    document.getElementsByTagName("label")[0].style.color = "red";
  }


});