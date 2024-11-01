var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

function runDebounceTest(t, calls) {
    const start = Date.now();

    function log(...inputs) {
        console.log([Date.now() - start, inputs]);
    }

    const dlog = debounce(log, t);

    for (const call of calls) {
        setTimeout(() => dlog(...call.inputs), call.t);
    }
}

const t1 = 50;
const calls1 = [
    { "t": 50, inputs: [1] },
    { "t": 75, inputs: [2] }
];
console.log("Shembulli 1:");
runDebounceTest(t1, calls1);

const t2 = 20;
const calls2 = [
    { "t": 50, inputs: [1] },
    { "t": 100, inputs: [2] }
];
console.log("Shembulli 2:");
runDebounceTest(t2, calls2);

const t3 = 150;
const calls3 = [
    { "t": 50, inputs: [1, 2] },
    { "t": 300, inputs: [3, 4] },
    { "t": 300, inputs: [5, 6] }
];
console.log("Shembulli 3:");
runDebounceTest(t3, calls3);
