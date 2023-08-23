const hamburgerLink = document.querySelector(".hamburger");

hamburgerLink.addEventListener("click", () => {
  if (hamburgerLink.classList.contains("close")) {
    document.querySelector(".hamburger img").src = "./images/icon-close.svg";
    hamburgerLink.classList.replace("close", "open");
  } else {
    document.querySelector(".hamburger img").src =
      "./images/icon-hamburger.svg";
    hamburgerLink.classList.replace("open", "close");
  }
});
