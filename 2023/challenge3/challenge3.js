
function findNaughtyStep(original, modified) {
    const longer = original.length > modified.length ? original : modified;
    const shorter = original.length > modified.length ? modified : original;
    
    for (let i = 0; i < longer.length; i++) {
        if (longer[i] !== shorter[i]) {
            return longer[i];
        }
    }
    
    return '';
}

// Test case 1: Extra step in modified
const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)) // 'e'

// Test case 2: Missing step in modified
const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'
