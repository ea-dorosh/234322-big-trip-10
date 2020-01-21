import Filters from "./components/filter";
import Menu from "./components/menu";
import Info from "./components/info";
import Total from "./components/total";
import TripDays from "./components/days-list";
import NewEvent from "./components/new-event";
import NoPoints from "./components/no-points";
// разделить days на day
import Day from "./components/day";
import {createDays} from "./Mock/days";
import {generateFilters} from "./Mock/filter";
import {generateMenu} from './mock/menu';

import {FILTERS} from "./const";
import {render, RenderPosition} from "./utils/render";

const DAYS_QUANTITY = 3;

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

render(eventsElement, new TripDays().getElement(), RenderPosition.BEFOREEND);

const tripDaysElement = mainElement.querySelector(`.trip-days`);

const renderDay = (day) => {

  const replaceEventToEdit = (eventsList, editComponent, eventElement) => {
    eventsList.replaceChild(editComponent.getElement(), eventElement);
  };

  const replaceEditToEvent = (eventsList, eventElement, editComponent) => {
    eventsList.replaceChild(eventElement, editComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const dayComponent = new Day(day);

  const eventsElements = dayComponent.getElement().querySelector(`.day > .trip-events__list`).querySelectorAll(`.trip-events__item`);

  for (let i = 0; i < eventsElements.length; i++) {

    const editButton = eventsElements[i].querySelector(`.event__rollup-btn`);
    const editComponent = new NewEvent(dayComponent._day.events[i]);

    const editForm = editComponent.getElement().querySelector(`form`);

    editForm.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      replaceEditToEvent(editForm.parentElement.parentElement, eventsElements[i], editComponent);
    });

    editButton.addEventListener(`click`, () => {
      replaceEventToEdit(eventsElements[i].parentElement, editComponent, eventsElements[i]);
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  }

  render(tripDaysElement, dayComponent.getElement(), RenderPosition.BEFOREEND);

};

const days = createDays(DAYS_QUANTITY);

if (days.length > 0) {
  // выводим дни с событиями
  days.forEach((day) => renderDay(day));
  // выводим маршрут
  render(infoElement, new Info(days).getElement(), RenderPosition.AFTERBEGIN);
  // выводим итоговую сумму
  render(infoElement, new Total(days).getElement(), RenderPosition.BEFOREEND);
} else {
  // выводим пустой список
  render(eventsElement, new NoPoints().getElement(), RenderPosition.BEFOREEND);
}
