module.exports = function warmup(temperature) {
    /* formula from wiki */
    const formula = 9 / 5 + 32;

    return temperature * formula;
};
