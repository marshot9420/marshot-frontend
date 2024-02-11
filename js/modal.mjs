const modal = document.querySelector(".modal");
const modalToggleButton = document.getElementById("modal--toggle-button");
const modalCloseButton = document.getElementById("modal-close-button");
const cancelButton = document.querySelector(
  ".modal__content--footer button:last-child"
);

function toggleModal() {
  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
}

function closeModal() {
  modal.style.display = "none";
}

function closeModalWithOutsideClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}

modalToggleButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", closeModal);
cancelButton.addEventListener("click", closeModal);
window.addEventListener("click", closeModalWithOutsideClick);
