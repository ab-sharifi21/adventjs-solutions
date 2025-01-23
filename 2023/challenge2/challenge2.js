
function manufacture(gifts, materials) {
    return gifts.filter(
        (gift) => [...gift].every(
            (char) => materials.includes(char)
        )
    )
}

console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'))
console.log(manufacture(['juego', 'puzzle'], 'jlepuz'))
console.log(manufacture(['libro', 'ps5'], 'psli'))
