import {getRandomElement} from "../util";
import {getRandomNumber} from "../util";

const eventIcon = new Map([
  [`check`, `check-in.png`],
  [`sightseeing`, `sightseeing.png`],
  [`restaurant`, `restaurant.png`],
  [`taxi`, `taxi.png`],
  [`bus`, `bus.png`],
  [`train`, `train.png`],
  [`ship`, `ship.png`],
  [`transport`, `transport.png`],
  [`drive`, `drive.png`],
  [`flight`, `flight.png`],
]);

const eventCities = new Set([`Moscow`, `Milan`, `Munich`, `Novosibirsk`, `Bagdad`, `Rome`]);

const eventText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const eventOptions = new Set([
  {
    type: `Add`,
    name: `luggage`,
    price: `+10 €`,
  },
  {
    type: `Switch to`,
    name: `comfort class`,
    price: `+150 €`,
  },
  {
    type: `Add`,
    name: `meal`,
    price: `+2 €`,
  },
  {
    type: `Choose`,
    name: `seats`,
    price: `+9 €`,
  },
]);

export const createEvent = () => {

  const type = getRandomElement([...eventIcon.keys()]);
  const sentences = eventText.split(`. `);
  const quantity = getRandomNumber(0, 3);
  const startTimeHour = getRandomNumber(1, 23);
  const finishTimeHour = getRandomNumber(startTimeHour, 24);
  const Price = {
    MIN: 10,
    MAX: 200,
  };

  return {
    type,
    icon: `img/icons/${eventIcon.get(type)}`,
    city: getRandomElement([...eventCities]),
    text: new Array(quantity).fill(``).map(() =>getRandomElement(sentences)),
    date: new Date(),
    timeStart: `${startTimeHour}:${getRandomNumber(1, 60)}`,
    timeEnd: `${finishTimeHour}:${getRandomNumber(1, 60)}`,
    price: getRandomNumber(Price.MIN, Price.MAX),
  };
};
