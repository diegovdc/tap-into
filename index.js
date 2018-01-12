module.exports = Object.assign(
    (...xs) => { 
        console.log.apply(console, xs)
        return xs[xs.length - 1]
    }, 
    {
        id: x => x,
        l: console.log,
        hola: () => console.log('hola'),
        start: () => console.log('\n.\n..\n...\n....\n.....\n......\n.......\n........\nStarting:....\n'),
        end: () => console.log(`\nEnding:....\n........\n.......\n......\n.....\n....\n...\n..\n.\n`),
        c: msg => x => {//curried
            console.log(msg, x)
            return x
        },
        ap: (fn, x) => {
            console.log(fn(x), x)
            return x
        },
        ap_c: fn => x => {
            console.log(fn(x), x)
            return x
        },
    }
)