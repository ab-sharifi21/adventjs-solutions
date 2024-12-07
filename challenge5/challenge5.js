function organizeShoes(shoes) {
    const left = {};
    const right = {};

    for (const shoe of shoes) {
        const { type, size } = shoe;
        if (type === 'I') {
            left[size] = (left[size] || 0) + 1;
        } else if (type === 'R') {
            right[size] = (right[size] || 0) + 1;
        }
    }

    const result = [];

    for (const size in left) {
        if (right[size]) {
            const pairs = Math.min(left[size], right[size]);
            for (let i = 0; i < pairs; i++) {
                result.push(Number(size));
            }
        }
    }

    return result;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];
console.log(organizeShoes(shoes)); // [38, 42]

