import {createSiteMenuTemplate} from "./components/menu.js";
import {createSiteFilterTemplate} from "./components/filter.js";
import {createSiteInfoTemplate} from "./components/info";
import {createSiteNewEventTemplate} from "./components/new-event";
import {createSiteDayListTemplate} from "./components/day-list";
import {createSiteDayTemplate} from "./components/event";

import {createEvent} from "./Mock/event";
import {createEvents} from "./Mock/event";


const EVENT_QUANTITY = 3;


const headerElement = document.querySelector(`.page-header`);
const menuElement = headerElement.querySelector(`.trip-main__menu-title`);
const filterElement = headerElement.querySelector(`.trip-main__filter-title`);
const infoElement = headerElement.querySelector(`.trip-main__trip-info`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(menuElement, createSiteMenuTemplate(), `afterend`);
render(filterElement, createSiteFilterTemplate(), `afterend`);
render(infoElement, createSiteInfoTemplate(), `afterbegin`);

const mainElement = document.querySelector(`.page-main`);
const eventsElement = mainElement.querySelector(`.trip-events`);

render(eventsElement, createSiteNewEventTemplate(createEvent()), `beforeend`);
render(eventsElement, createSiteDayListTemplate(), `beforeend`);

const eventsDayListElement = mainElement.querySelector(`.trip-days`);

const events = createEvents(EVENT_QUANTITY);

events.forEach(
    (event) => render(eventsDayListElement, createSiteDayTemplate(event), `beforeend`)
);

