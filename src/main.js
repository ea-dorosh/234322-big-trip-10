import {createSiteInfoTemplate} from "./components/info";
import {createSiteNewEventTemplate} from "./components/new-event";
import {createSiteDayListTemplate} from "./components/day-list";
import {createSiteDayTemplate} from "./components/event";
import {createSiteTotalTemplate} from "./components/total";
import Filters from "./components/filter";
import Menu from "./components/menu";

import {createEvent, createEvents} from "./Mock/event";
import {generateFilters} from "./Mock/filter";
import {generateMenu} from './mock/menu';

import {FILTERS} from "./const";


const EVENT_QUANTITY = 3;


const headerElement = document.querySelector(`.page-header`);
const menuElement = headerElement.querySelector(`.trip-main__menu-title`);
const filterElement = headerElement.querySelector(`.trip-main__filter-title`);
const infoElement = headerElement.querySelector(`.trip-main__trip-info`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const filters = generateFilters(FILTERS);
render(filterElement, new Filters(filters).getElement().innerHTML, `afterend`);

const menu = generateMenu();
render(menuElement, new Menu(menu).getElement().innerHTML, `afterend`);


const mainElement = document.querySelector(`.page-main`);
const eventsElement = mainElement.querySelector(`.trip-events`);

render(eventsElement, createSiteNewEventTemplate(createEvent()), `beforeend`);
render(eventsElement, createSiteDayListTemplate(), `beforeend`);

const eventsDayListElement = mainElement.querySelector(`.trip-days`);
const events = createEvents(EVENT_QUANTITY);
render(eventsDayListElement, createSiteDayTemplate(events), `beforeend`);

render(infoElement, createSiteInfoTemplate(events), `afterbegin`);
render(infoElement, createSiteTotalTemplate(events), `beforeend`);
