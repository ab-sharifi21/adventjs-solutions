
const prepareGifts = (gifts) => {
    const preparedGifts = [...new Set(gifts)];
    preparedGifts.sort((a, b) => a - b);
    return preparedGifts;
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]