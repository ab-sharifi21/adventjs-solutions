
function findFirstRepeated(gifts) {
    const seen = new Set();
    for (const giftId of gifts) {
        if (seen.has(giftId)) {
            return giftId;
        }
        seen.add(giftId);
    }

    return -1;
}
