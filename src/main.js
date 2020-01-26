import TripController from "./controllers/trip";

import Filters from "./components/filter";
import Menu from "./components/menu";
import {generateFilters} from "./Mock/filter";
import {generateMenu} from './mock/menu';

import {FILTERS} from "./const";
import {render, RenderPosition} from "./utils/render";
import {createDays} from "./mock/days";

const headerElement = document.querySelector(`.page-header`);
const menuElement = headerElement.querySelector(`.trip-main__menu-title`);
const filterElement = headerElement.querySelector(`.trip-main__filter-title`);


const mainElement = document.querySelector(`.page-main`);
const daysElement = mainElement.querySelector(`.trip-events`);

const filters = generateFilters(FILTERS);

render(filterElement, new Filters(filters).getElement(), RenderPosition.AFTEREND);

const menu = generateMenu();
render(menuElement, new Menu(menu).getElement(), RenderPosition.AFTEREND);

const DAYS_QUANTITY = 3;
const days = createDays(DAYS_QUANTITY);

const tripController = new TripController(daysElement);
tripController.render(days);
