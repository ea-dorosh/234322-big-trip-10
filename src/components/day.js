import {createEvent} from "../mock/event";
import {castDate, formatDateToICO} from "../util";

const newEvent = createEvent();

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

export const createSiteDayTemplate = () => {
  const offersMarkup = generateOffersMarkup(newEvent.offers);
  return (
    `<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>
              <ul class="trip-events__list">
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="${newEvent.icon}" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${newEvent.description}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="${formatDateToICO(newEvent.startTime)}">${castDate(newEvent.startTime)}</time>
                        &mdash;
                        <time class="event__end-time" datetime="${formatDateToICO(newEvent.endTime)}">${castDate(newEvent.endTime)}</time>
                      </p>
                      <p class="event__duration">${newEvent.duration}</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${newEvent.price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                        ${offersMarkup}
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>`
  );
};
