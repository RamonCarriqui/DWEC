function calculateSupply(age, amount_per_day) {
    const maxage = 100;
    life = maxage - age;
    return life*365/amount_per_day;
}

document.write(calculateSupply(23, 10000));

document.write(calculateSupply(50,100));