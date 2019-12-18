import {createElement} from "../util";

const createSiteTotalTemplate = (events) => {
  let totalPrice = events.reduce((price, value) => price + value.price, 0);

  return (
    `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`
  );
};

export default class Total {
  constructor(events) {
    this._events = events;
    this._element = null;
  }

  getTemplate() {
    return createSiteTotalTemplate(this._events);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
