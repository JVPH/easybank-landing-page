const hamburgerLink = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const modal = document.querySelector(".modal-menu");

hamburgerLink.addEventListener("click", () => {
  if (hamburgerLink.classList.contains("close")) {
    document.querySelector(".hamburger img").src = "./images/icon-close.svg";
    hamburgerLink.classList.replace("close", "open");
    overlay.classList.add("on");
    body.classList.add("no-scroll");
    modal.style.display = "block";
  } else {
    document.querySelector(".hamburger img").src =
      "./images/icon-hamburger.svg";
    hamburgerLink.classList.replace("open", "close");
    overlay.classList.remove("on");
    body.classList.remove("no-scroll");
    modal.style.display = "none";
  }
});
