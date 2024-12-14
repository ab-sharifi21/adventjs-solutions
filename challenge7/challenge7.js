function fixPackages(packages) {
    const reverseString = (str) => str.split('').reverse().join('');

    const stack = [];
    let result = '';

    for (const char of packages) {
        if (char === ')') {
            let toReverse = '';
            while (stack.length && stack[stack.length - 1] !== '(') {
                toReverse = stack.pop() + toReverse;
            }
            stack.pop();
            stack.push(...reverseString(toReverse));
        } else {
            stack.push(char);
        }
    }
    result = stack.join('');
    return result;
}

console.log(fixPackages('a(cb)de'));           // "abcde"
