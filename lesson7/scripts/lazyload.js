let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('.random-img');
observer.observe(target);

let callback = (entries, observer) => {
    entries.forEach((entry) => {
    });
  };