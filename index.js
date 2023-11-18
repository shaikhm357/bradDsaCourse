const cars = [
  { make: "Toyota", model: "Camry", year: 2020, mileage: 30800.22 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 32000.12 },
  { make: "Chevrolet", model: "Impala", year: 2021, mileage: 17500 },
  { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
  { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
];

console.log(calculateCarDetails(cars));

function calculateCarDetails(cars) {
  const totalMileage = cars.reduce((mile, car) => mile + car.mileage, 0);
  const averageMileage = totalMileage / cars.length;

  const HighestMile = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );

  const LowestMile = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    totalMileage: parseFloat(totalMileage.toFixed(2)),
    highestMileage: HighestMile,
    lowestMileage: LowestMile,
  };
}
