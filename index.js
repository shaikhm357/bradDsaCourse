const products = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Orange", price: 0.6, quantity: 15 },
];

function calculateTotalSalesWithTax(products, taxrate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  console.log(parseFloat((totalSales * taxrate) / 100 + totalSales).toFixed(2));
}

calculateTotalSalesWithTax(products, 8);
