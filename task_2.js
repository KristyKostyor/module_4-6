const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];


const getAverageValue = (allCashbox) => {
    let sum = allCashbox.reduce((num,val) => num+val,0);
    return Math.floor(sum/allCashbox.length);
};
const averageSalles = getAverageValue(allCashbox);
console.log(averageSalles);