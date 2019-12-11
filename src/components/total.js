export const createSiteTotalTemplate = (events) => {
  let totalPrice = events.reduce((price, value) => price + value.price, 0);

  return (
    `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`
  );
};

