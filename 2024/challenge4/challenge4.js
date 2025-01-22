function createXmasTree(height, ornament) {
    if (height < 1 || height > 100) {
        throw new Error("The height must be between 1 and 100");
    }

    let tree = "";

    for (let i = 0; i < height; i++) {
        const spaces = "_".repeat(height - i - 1);
        const ornaments = ornament.repeat(2 * i + 1);
        tree += spaces + ornaments + spaces + "\n";
    }


    const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
    tree += trunk + "\n" + trunk;

    return tree;
}

const tree = createXmasTree(5, '*');
console.log(tree);
