const heroBtn = document.querySelector(".hero__btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

overlay.style.transitionDuration = "0.36s";
modal.style.transitionDuration = "0.36s";

heroBtn.addEventListener("click", () => {
  overlay.classList.add("overlay_open");
  modal.classList.add("modal_open");
});

overlay.addEventListener("click", (event) => {
  const target = event.target;

  if (target === overlay || target.closest(".modal__close")) {
    overlay.classList.remove("overlay_open");
    modal.classList.remove("modal_open");
  }
});


