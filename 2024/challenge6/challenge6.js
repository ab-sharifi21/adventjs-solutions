function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        const row = box[i];

        const starIndex = row.indexOf('*');

        if (starIndex > 0 && starIndex < row.length - 1) {
            return true;
        }
    }

    return false;
}

// Example usage
console.log(inBox([
    "###",
    "#*#",
    "###"
])); // ➞ true

