function decode(message) { 
    const stack = [];
    let current = '';

    for (const char of message) {
        if (char === '(') {
            stack.push(current);
            current = '';      
        } else if (char === ')') {
            current = stack.pop() + current.split('').reverse().join('');
        } else {
            current += char;
        }
    }

    return current;
}

// Example usage:
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

