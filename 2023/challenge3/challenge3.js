function findNaughtyStep(original, modified) {
    const originalArray = original.split('').sort();
    const modifiedArray = modified.split('').sort();

    for (let i = 0; i < Math.max(originalArray.length, modifiedArray.length); i++) {
        if (originalArray[i] !== modifiedArray[i]) {
            return originalArray[i] || modifiedArray[i];
        }
    }

    return '';
}

console.log(findNaughtyStep('abcd', 'abcde')); // 'e'
console.log(findNaughtyStep('stepfor', 'stepor')); // 'f'
console.log(findNaughtyStep('abcde', 'abcde')); // ''