import {createElement, formatDateToICO} from "../util";

const createSiteDayListTemplate = () => {

  return (
    `
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="${icon}" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${type} at ${city}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="${formatDateToICO(startTime)}">${castDate(startTime)}</time>
                        &mdash;
                        <time class="event__end-time" datetime="${formatDateToICO(endTime)}">${castDate(endTime)}</time>
                      </p>
                      <p class="event__duration">${duration}</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                        ${offersMarkup.join(``)}
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>
    `
  );
};

export default class EventTry {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteDayListTemplate();
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
