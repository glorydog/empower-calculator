import {
  prices,
  additionalSeatPrices,
  afterHoursSupportPrices,
  assessmentPrices,
  additionalProducts
} from '../config/prices.js';

export function calculatePrice({
  service,
  location,
  seats,
  afterHoursSupport,
  assessment,
  selectedProducts = []
}) {
  let monthlyTotal = calculateBasePrice(service, location, seats);
  monthlyTotal += calculateAdditionalSeats(service, location, seats);
  monthlyTotal += calculateAfterHoursSupport(location, afterHoursSupport, service);
  monthlyTotal += calculateAdditionalProducts(selectedProducts, seats);

  const oneTimeCosts = assessmentPrices[assessment] || 0;

  return {
    monthlyTotal,
    oneTimeCosts,
    breakdown: generateBreakdown({
      service,
      location,
      seats,
      afterHoursSupport,
      assessment,
      selectedProducts,
      monthlyTotal,
      oneTimeCosts
    })
  };
}

function calculateBasePrice(service, location, seats) {
  return prices[service][location];
}

function calculateAdditionalSeats(service, location, seats) {
  if (seats <= 10) return 0;
  return (seats - 10) * additionalSeatPrices[service][location];
}
