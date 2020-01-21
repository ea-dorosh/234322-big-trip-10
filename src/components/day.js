import AbstractComponent from "./abstarct-component";
import {castDate, formatDateToICO, formatDateAttribute} from "../util";
import {Month} from "../const";

const generateOffersMarkup = (offers) => {
  return offers.map((offer) => {
    const {type, price} = offer;
    return (
      `<li class="event__offer">
        <span class="event__offer-title">${type}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${price}</span>
      </li>`
    );
  });
};

const eventTemplate = ({icon, city, type, duration, startTime, endTime, price, offers}) => {

  const offersMarkup = generateOffersMarkup(offers);
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

export const createSiteDayTemplate = ({date, dayNumber, events}) => {
  return (
    `<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${dayNumber}</span>
                <time class="day__date" datetime="${formatDateAttribute(date)}">${Month.get(date.getMonth())} ${date.getDate()}</time>
              </div>
              <ul class="trip-events__list">
                ${events.map((event) => eventTemplate(event))}
              </ul>
            </li>`
  );
};

export default class Day extends AbstractComponent {
  constructor(day) {
    super();

    this._day = day;
  }

  getTemplate() {
    return createSiteDayTemplate(this._day);
  }
}
