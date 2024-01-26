// get references to the popup and overlay elements
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");

// function to open the popup
openPopupButton.addEventListener("click", (event) => {
  event.preventDefault();
  popupOverlay.style.display = "block";
  setTimeout(() => {
    popupOverlay.querySelector(".popup").classList.add("is-visible");
  }, 10);
});

// function to close the popup
closePopupButton.addEventListener("click", () => {
  popupOverlay.querySelector(".popup").classList.remove("is-visible");
  setTimeout(() => {
    popupOverlay.style.display = "none";
  }, 300);
});

// close the popup if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});
