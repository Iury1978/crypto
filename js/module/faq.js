const show = (elem, answer) => {
  // проверуа насчет каких то коллизий
  if (
    elem.classList.contains("faq__item_show") ||
    elem.classList.contains("collapsing")
  )
    return;
  // включаем видимость с дисплэй нон на блок
  answer.style.display = "block";
  // записываем высоту answer
  const height = answer.offsetHeight;
  // обнуляем высоту(для анимации)
  answer.style.height = 0;
  // что бы не вываливался внутренний блок faq__dropdown прописываем скрытие
  answer.style.overflow = "hidden";
  // дописываем стиль
  answer.style.transition = "height 0.3s ease-in-out";
  //  это нужно для нбольшого сброса внутри расчетов браузера
  answer.offsetHeight;
  //  и прописываем полученную высоту
  answer.style.height = `${height}px`;
  //  исправляем коллизии
  elem.classList.add("collapsing");
  // что бы повторно можно было открыть-закрыть- удаляем все стили через то время,
  // которое указано в анимации

  setTimeout(() => {
    elem.classList.add("faq__item_show");
    answer.style.display = "";
    answer.style.height = "";
    answer.style.overflow = "";
    answer.style.transition = "";
    answer.offsetHeight;
    elem.classList.remove("collapsing");
  }, 300);
};

const hide = (elem, answer) => {
  // проверуа насчет каких то коллизий
  if (
    !elem.classList.contains("faq__item_show") ||
    elem.classList.contains("collapsing")
  )
    return;

  answer.style.height = `${answer.offsetHeight}px`;

  //  это нужно для нбольшого сброса внутри расчетов браузера
  answer.offsetHeight;

  // включаем видимость с дисплэй нон на блок
  answer.style.display = "block";

  // обнуляем высоту(для анимации)
  answer.style.height = 0;
  // что бы не вываливался внутренний блок faq__dropdown прописываем скрытие
  answer.style.overflow = "hidden";
  // дописываем стиль
  answer.style.transition = "height 0.3s ease-in-out";
  elem.classList.remove("faq__item_show");
  //  исправляем коллизии
  elem.classList.add("collapsing");

  setTimeout(() => {
    answer.style.display = "";
    answer.style.height = "";
    answer.style.overflow = "";
    answer.style.transition = "";
    answer.offsetHeight;
    elem.classList.remove("collapsing");
  }, 300);
};

export function accodrion() {
  const list = document.querySelector(".faq__list");

  list.addEventListener("click", (event) => {
    const button = event.target.closest(".faq__question");
    if (button) {
      const item = button.closest(".faq__item");

      // item.classList.toggle("faq__item_show");
      // так рабюотает, но неплавно окно выскакивает, поэтому пишем так и 2 функции дополнительные
      const answer = item.querySelector(".faq__answer");
      item.classList.contains("faq__item_show")
        ? hide(item, answer)
        : show(item, answer);
    }
  });
}
