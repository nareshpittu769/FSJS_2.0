let ul = document.getElementsByTagName("ul")[0];
let li = ul.children[2];
li.firstElementChild.innerHTML = "Projects";
let search = document.getElementsByClassName("search-field")[0];
search.firstElementChild.placeholder = "Search My Project";
let img = document.getElementsByClassName("hero-right-section")[0];
img.firstElementChild.src = "./avtar.png";
let bottomul = document.getElementsByTagName("ul")[1];
bottomul.remove();
let foo = document.getElementsByTagName("footer")[0];
foo.firstElementChild.style.marginRight = "600px";