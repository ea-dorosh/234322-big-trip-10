import AbstractComponent from "./abstarct-component";
import {Month} from "../const";

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

export default class Info extends AbstractComponent {
  constructor(event) {
    super();

    this._event = event;
  }

  getTemplate() {
    return createSiteInfoTemplate(this._event);
  }
}
