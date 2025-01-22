
function organizeInvertory(inventory) {
    const categories = new Set(inventory.map(item => item.category))

    const organizedInventory = {}
    for (const category of categories) {
        const toys = inventory.filter(item => item.category === category)
        const organizedToys = toys.reduce((acc, toy) => {
            acc[toy.name] = (acc[toy.name] || 0) + toy.quantity
            return acc
        }, {})
        organizedInventory[category] = organizedToys
    }
    return organizedInventory
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]
console.log(organizeInvertory(inventory))
