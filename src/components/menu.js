import AbstractComponent from "./abstarct-component";

const createTabTemplate = (menuItem) => {
  const {title, link, active} = menuItem;

  return `<a class="trip-tabs__btn  ${active ? `trip-tabs__btn--active` : ``}" href="${link}">${title}</a>`;
};

const createMenuTemplate = (tabs) => {
  const menu = tabs.map((tab) => createTabTemplate(tab)).join(``);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menu}
    </nav>`
  );
};

export default class Menu extends AbstractComponent {
  constructor(tabs) {
    super();

    this._tabs = tabs;
  }

  getTemplate() {
    return createMenuTemplate(this._tabs);
  }
}
