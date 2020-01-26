import Day from "../components/day";
import {render, RenderPosition, replace} from "../utils/render";
import NewEvent from "../components/new-event";
import Info from "../components/info";
import Total from "../components/total";
import NoPoints from "../components/no-points";
import TripDays from "../components/days-list";


const renderDay = (tripDaysList, day) => {

  const dayComponent = new Day(day);

  const eventsElements = dayComponent.getElement().querySelectorAll(`.trip-events__item`);

  for (let i = 0; i < eventsElements.length; i++) {

    // //////////////////////////////////////////////////////////
    const onEscKeyDown = (evt) => {
      const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

      if (isEscKey) {
        replaceEditToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const replaceEventToEdit = () => {
      replace(editComponent.getElement(), eventsElements[i]);
    };

    const replaceEditToEvent = () => {
      replace(eventsElements[i], editComponent.getElement());
    };
    // //////////////////////////////////////////////////////////

    const editButton = eventsElements[i].querySelector(`.event__rollup-btn`);
    editButton.addEventListener(`click`, () => {
      replaceEventToEdit();
      document.addEventListener(`keydown`, onEscKeyDown);
    });


    const editComponent = new NewEvent(dayComponent._day.events[i]);
    editComponent.onSubmitButtonClick((evt) => {
      evt.preventDefault();
      replaceEditToEvent();
    });
  }

  render(tripDaysList, dayComponent.getElement(), RenderPosition.BEFOREEND);

};

export default class TripController {
  constructor(container) {
    this._container = container;

    this._tripDaysComponent = new TripDays();
    this._noPointsComponent = new NoPoints();
  }

  render(days) {
    const container = this._container;
    const dayContainer = this._tripDaysComponent;
    const infoElement = document.querySelector(`.trip-main__trip-info`);

    this._infoComponent = new Info(days);
    this._totalComponent = new Total(days);

    if (days.length > 0) {
      render(container, dayContainer.getElement(), RenderPosition.BEFOREEND);
      // выводим дни с событиями
      days.forEach((day) => renderDay(dayContainer.getElement(), day));
      // выводим маршрут
      render(infoElement, this._infoComponent.getElement(), RenderPosition.AFTERBEGIN);
      // выводим итоговую сумму
      render(infoElement, this._totalComponent.getElement(), RenderPosition.BEFOREEND);
    } else {
      // выводим пустой список
      render(container.getElement(), this._noPointsComponent.getElement(), RenderPosition.BEFOREEND);
    }
  }
}
