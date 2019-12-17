import {castDate, formatDateToICO, formatDateAttribute, createElement} from "../util";
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

const groupObjects = (objects, property) => {
  return objects.reduce((groups, item) => {
    const group = (groups[item[property]] || []);
    group.push(item);
    groups[item[property]] = group;
    return groups;
  }, {});
};

const createSiteDayTemplate = (events) => {
  const groupEvents = groupObjects(events, `dayOfDate`);
  let dayWithEvents = ``;
  let indexDay = 1;
  for (const objects of Object.values(groupEvents)) {
    let oneEventTemplate = ``;
    for (const event of objects) {
      oneEventTemplate += eventTemplate(event);
    }
    let oneDayTemplate = `<li class="trip-days__item  day">
            <div class="day__info">
              <span class="day__counter">${indexDay++}</span>
              <time class="day__date" datetime="${formatDateAttribute(objects[0].date)}">${Month.get(objects[0].date.getMonth())} ${objects[0].date.getDate()}</time>
            </div>
            <ul class="trip-events__list">
              ${oneEventTemplate}
            </ul>
          </li>`;
    dayWithEvents += oneDayTemplate;
  }
  return dayWithEvents;
};

export default class DayEvent {
  constructor(events) {
    this._events = events;
    this._element = null;
  }

  getTemplate() {
    return createSiteDayTemplate(this._events);
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
