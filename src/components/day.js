import {createElement} from "../util";

const createSiteDayListTemplate = () => {
  const dateTimeAtr = formatDateAttribute(date);
  const dateTime = `${Month.get(date.getMonth())} ${date.getDate()}`;
  return (
    `<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="${dateTimeAtr}">${dateTime}</time>
              </div>
              <ul class="trip-events__list">
                ${eventTemplate(icon, city, type, duration, startTime, endTime, price, offers)}
              </ul>
            </li>`
  );
};

export default class Day {
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
