import {formatToTitleCase} from "../util";

const generateFilter = (name, index) => ({
  title: formatToTitleCase(name),
  value: name,
  checked: index === 0,
});

export const generateFilters = (filters) => {
  return filters.map((filter, index) => generateFilter(filter, index));
};
