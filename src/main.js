import Filters from "./components/filter";
import Menu from "./components/menu";
import Info from "./components/info";
import Total from "./components/total";
import DaysList from "./components/days-list";
import NewEvent from "./components/new-event";
import DayEvent from "./components/event";
import NoPoints from "./components/no-points";

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

render(eventsElement, new DaysList().getElement(), RenderPosition.BEFOREEND);

const eventsDaysListElement = mainElement.querySelector(`.trip-days`);

const renderEvent = (event) => {

  const replaceEventToEdit = () => {
    eventsDaysListElement.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
  };

  const replaceEditToEvent = () => {
    eventsDaysListElement.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const eventComponent = new DayEvent(event);
  const editButton = eventComponent.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, () => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const eventEditComponent = new NewEvent(event);
  const editForm = eventEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, replaceEditToEvent);

  render(eventsDaysListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

const events = createEvents(EVENT_QUANTITY);

// старая функция которая рендерит сразу все события
// render(eventsDayListElement, new DayEvent(events).getElement(), RenderPosition.BEFOREEND);


if (events.length > 0) {
  // выводим события
  events.forEach((event) => renderEvent(event));
  render(infoElement, new Info(events).getElement(), RenderPosition.AFTERBEGIN);
  render(infoElement, new Total(events).getElement(), RenderPosition.BEFOREEND);
} else {
  // выводим пустой список
  render(eventsElement, new NoPoints().getElement(), RenderPosition.BEFOREEND);
}

