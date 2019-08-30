const countElectricity = (currentDay, currentNight) => {
    const total = currentDay + currentNight;
    const rest = total - 100;
    const dayPercentage = Math.round((currentDay / total) * 100000) / 1000;
    const nightPercentage = (100 - dayPercentage).toFixed(3);
    const discountSum = dayPercentage * 0.98 + nightPercentage * 0.45;
    const sum = (rest * dayPercentage + 1.68 + rest * nightPercentage * 0.9) / 100;
    return sum + discountSum;
}
console.log(countElectricity(325, 600));
