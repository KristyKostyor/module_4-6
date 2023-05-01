const allCashgoods = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = (allCashgoods) => {
  let totalCost = 0;
  let totalQuanty = 0;
  allCashgoods.forEach((num) => {
    totalCost += num[1];
    totalQuanty += num[0];
  });
  return Math.floor(totalCost / totalQuanty);
};

const averagePrice = getAveragePriceGoods(allCashgoods);
console.log(averagePrice);