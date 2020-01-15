import {getRandomElement, getRandomNumber} from "../util";

const EventIcon = new Map([
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

const OFFERS = [
  `Add luggage`,
  `Switch to comfort`,
  `Rent a car`,
];

const Price = {
  MIN: 10,
  MAX: 200,
};

const MIN_INDEX = 0;
let maxIntervalValue;

const generateDate = (date, hours = 0) => {
  date.setHours(date.getHours() + hours);
  return new Date(date);
};

const generateOffer = () => ({
  type: getRandomElement(OFFERS),
  price: getRandomNumber(Price.MIN, Price.MAX)
});

const generateOffers = () => {
  maxIntervalValue = 3;
  let arrayLength = getRandomNumber(MIN_INDEX, maxIntervalValue);
  const cardOffers = new Array(arrayLength)
    .fill(``).map(() => generateOffer());

  return cardOffers;
};

const createEvent = (day) => {

  const now = new Date();
  const randomHours = getRandomNumber(1, 13);
  // const date = day || now;
  const type = getRandomElement([...EventIcon.keys()]);
  const sentences = eventText.split(`. `);
  const quantity = getRandomNumber(MIN_INDEX, 3);

  return {
    type,
    icon: `img/icons/${EventIcon.get(type)}`,
    city: getRandomElement([...eventCities]),
    description: new Array(quantity).fill(``).map(() => getRandomElement(sentences)).join(),
    // date,
    startTime: generateDate(now),
    endTime: generateDate(now, randomHours),
    duration: `${randomHours}H`,
    price: getRandomNumber(Price.MIN, Price.MAX),
    offers: generateOffers(),
  };
};

const createEvents = (amount) => {
  let dayOfEvent = new Array(amount).fill(``).map(() => new Date());
  if (amount > 2) {
    dayOfEvent[2].setDate(dayOfEvent[2].getDate() + 3);
  }
  return new Array(amount)
    .fill(``)
    .map((element, index) => {
      const event = createEvent(dayOfEvent[index]);
      return Object.assign(event, {dayOfDate: event.date.getDate()});
    });
};

export {createEvent, createEvents};
