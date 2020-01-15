import {createEvent} from "./event";

//Days => day => (events => evenet, event...)
// 2) Сильно упрощен код


const createDay = (date) => {
  const {day, month} = date;
  const events = createEvents();

  return `<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="${dateTimeAtr}">${dateTime}</time>
              </div>
              <ul class="trip-events__list">
              ${events.map((event) => eventTemplate(event))}
              </ul>
            </li>`;
};


function createEvents() {
  const eventsCount = 3;
  const events = [];

  for (let i = 0; i < eventsCount; i++) {
    const event = createEvent();

    events.push(event);
  }

  return events;
}
