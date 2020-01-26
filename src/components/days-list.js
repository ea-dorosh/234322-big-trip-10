import AbstractComponent from "./abstarct-component";

const createSiteDayListTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class TripDays extends AbstractComponent {

  getTemplate() {
    return createSiteDayListTemplate();
  }
}
