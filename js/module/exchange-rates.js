const exchangeRatesList = document.querySelector(".exchange-rates__list");

const socket = new WebSocket("wss://web-socket-current.herokuapp.com");

const renderExchange = (wrapper, data) => {
  const { from, to, rate, change } = JSON.parse(data);
  // console.log(from, to, rate, change);
  // CNH GBP 61.93 1

  const li = document.createElement("li");
  li.classList.add(
    "exchange-rates__item",
    change > 0 ? "exchange-rates__item_up" : "exchange-rates__item_down"
  );

  const currency = document.createElement("span");
  currency.classList.add("exchange-rates__currency");
  currency.textContent = `${from}/${to}`;

  const value = document.createElement("span");
  value.classList.add("exchange-rates__value");
  value.textContent = `${rate}`;

  li.append(currency, value);
  // вставлять сверху, а не снизу
  wrapper.prepend(li);

  if (wrapper.children.length > 4) {
    wrapper.children[4].remove();
  }
  //   <li class="exchange-rates__item exchange-rates__item_up">
  //   <span class="exchange-rates__currency">RUB/AUD</span>
  //   <span class="exchange-rates__value">25.59</span>
  // </li>;
};

socket.addEventListener("message", (event) => {
  // console.log(event.data);
  // {"type":"EXCHANGE_RATE_CHANGE","from":"GBP","to":"BYR","rate":45.04,"change":-1}
  renderExchange(exchangeRatesList, event.data);
});

socket.addEventListener("error", (error) => {
  console.log(error);
});
