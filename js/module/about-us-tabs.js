const advantageBtns = document.querySelectorAll(".advantage__btn");
const advantageItemContent = document.querySelectorAll(
  ".advantage__item-content"
);

advantageBtns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    advantageItemContent.forEach((content, contentIndex) => {
      if (btnIndex === contentIndex) {
        advantageBtns[contentIndex].classList.add("advantage__btn_active");
        advantageItemContent[contentIndex].classList.add(
          "advantage__item-content_active"
        );
      } else {
        advantageBtns[contentIndex].classList.remove("advantage__btn_active");
        advantageItemContent[contentIndex].classList.remove(
          "advantage__item-content_active"
        );
      }
    });
  });
});
