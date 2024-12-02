
def prepareGifts(gifts: list[int]) -> list[int]:
    prepared_gifts = sorted(set(gifts))
    return prepared_gifts


gifts = [1, 2, 3, 2, 4, 3]
print(prepareGifts(gifts))
