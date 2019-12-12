import Filters from "./components/filter";
import Menu from "./components/menu";
import Info from "./components/info";
import Total from "./components/total";
import DayList from "./components/day-list";
import NewEvent from "./components/new-event";
import DayEvent from "./components/event";

import {createEvent, createEvents} from "./Mock/event";
import {generateFilters} from "./Mock/filter";
import {generateMenu} from './mock/menu';

import {FILTERS} from "./const";
import {render, RenderPosition} from "./util";

const EVENT_QUANTITY = 3;

const headerElement = document.querySelector(`.page-header`);
const menuElement = headerElement.querySelector(`.trip-main__menu-title`);
const filterElement = headerElement.querySelector(`.trip-main__filter-title`);
const infoElement = headerElement.querySelector(`.trip-main__trip-info`);

const filters = generateFilters(FILTERS);

render(filterElement, new Filters(filters).getElement(), RenderPosition.AFTEREND);

const menu = generateMenu();
render(menuElement, new Menu(menu).getElement(), RenderPosition.AFTEREND);


const mainElement = document.querySelector(`.page-main`);
const eventsElement = mainElement.querySelector(`.trip-events`);

render(eventsElement, new NewEvent(createEvent()).getElement(), RenderPosition.BEFOREEND);
render(eventsElement, new DayList().getElement(), RenderPosition.BEFOREEND);

const eventsDayListElement = mainElement.querySelector(`.trip-days`);
const events = createEvents(EVENT_QUANTITY);
render(eventsDayListElement, new DayEvent(events).getElement(), RenderPosition.BEFOREEND);

render(infoElement, new Info(events).getElement(), RenderPosition.AFTERBEGIN);
render(infoElement, new Total(events).getElement(), RenderPosition.BEFOREEND);
