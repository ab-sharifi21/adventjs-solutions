
function createFrame(names) {
    const longestName = names.reduce((longestName, currentName) => {
        return currentName.length > longestName.length ? currentName : longestName
    }, "");

    const frameWidth = longestName.length + 2
    const border = '*'.repeat(frameWidth + 2)

    const framedNames = names.map(name => `* ${name.padEnd(longestName.length, ' ')} *`)

    return [border, ...framedNames, border].join('\n')
}


const names = ['midu', 'madeval', 'educalvolpz']
console.log(typeof createFrame(names))


/* Expected Result
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

