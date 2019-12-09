import {Month} from "../const";

export const createSiteInfoTemplate = (event) => {
  const firstCity = event[0].city;
  const lastCity = event[event.length - 1].city;
  const startMonth = Month.get(event[0].date.getMonth());
  const firstDay = event[0].date.getDate();
  const lastDay = event[event.length - 1].date.getDate();

  return (
    `<div class="trip-info__main">
        <h1 class="trip-info__title">${firstCity} &mdash; ... &mdash; ${lastCity}</h1>

        <p class="trip-info__dates">${startMonth} ${firstDay}&nbsp;&mdash;&nbsp;${lastDay}</p>
      </div>`
  );
};

