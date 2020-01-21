import AbstractComponent from "./abstarct-component";

const createSiteTotalTemplate = (days) => {
  let totalPrice = 0;
  days.forEach((day) => {
    let dayTotalPrice = day.events.reduce((price, value) => price + value.price, 0);
    totalPrice += dayTotalPrice;
  });

  return (
    `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`
  );
};

export default class Total extends AbstractComponent {
  constructor(days) {
    super();

    this._days = days;
  }

  getTemplate() {
    return createSiteTotalTemplate(this._days);
  }
}
