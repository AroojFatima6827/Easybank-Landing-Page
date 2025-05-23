const icon = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
icon.addEventListener("click", () => {
  ul.classList.toggle("showData"); 

  const bar = document.getElementById("bar");
  if (ul.classList.contains("showData")) {
    bar.className = "fa-solid fa-xmark"; 
  } else {
    bar.className = "fa-solid fa-bars"; 
  }
});
