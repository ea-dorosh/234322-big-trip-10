export const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getRandomElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export const formatDateToICO = (date) => {
  return date.toISOString();
};

export const castDate = (date) => {
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

// export const formatEditDate = (date) => {
//   return formatDateToICO(date).split(`T`).join(` `);
// };

export const formatEditDate = (date) => {
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

export const formatDateAttribute = (date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
};

export const formatToTitleCase = (word) => {
  const firstLetter = word[0].toUpperCase();
  return `${firstLetter}${word.slice(1)}`;
};

export const createElement = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;

  return container;
};

