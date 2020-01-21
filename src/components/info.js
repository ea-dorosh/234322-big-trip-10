import {Month} from "../const";
import {createElement} from "../util";

const createSiteInfoTemplate = (days) => {
  const firstCity = days[0].events[0].city;
  const lastCity = days[days.length - 1].events.slice(-1)[0].city;
  const startMonth = Month.get(days[0].date.getMonth());
  const firstDay = days[0].date.getDate();
  const lastDay = days[days.length - 1].date.getDate();

  return (
    `<div class="trip-info__main">
        <h1 class="trip-info__title">${firstCity} &mdash; ... &mdash; ${lastCity}</h1>

        <p class="trip-info__dates">${startMonth} ${firstDay}&nbsp;&mdash;&nbsp;${lastDay}</p>
      </div>`
  );
};

export default class Info {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createSiteInfoTemplate(this._event);
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
