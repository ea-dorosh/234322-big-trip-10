import AbstractComponent from "./abstarct-component";

const createSiteFilterTemplate = (filter) => {
  const {title, value, checked} = filter;

  return (`
              <div class="trip-filters__filter">
                <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${checked ? `checked` : ``}>
                <label class="trip-filters__filter-label" for="filter-${value}">${title}</label>
              </div>
  `);
};

const createSiteFiltersTemplate = (filters) => {
  const tripFilters = filters.map((filter) => createSiteFilterTemplate(filter)).join(``);

  return (
    `      <form class="trip-filters" action="#" method="get">
              ${tripFilters}
              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>
            `
  );
};

export default class Filters extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createSiteFiltersTemplate(this._filters);
  }
}
