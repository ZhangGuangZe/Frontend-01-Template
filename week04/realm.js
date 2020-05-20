var set = new Set();
var queue = [
    // Infinity,
    // NaN,
    // undefined,
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Array,
    ArrayBuffer,
    Boolean,
    DataView,
    Date,
    Error,
    EvalError,
    Float32Array,
    Float64Array,
    Function,
    Int8Array,
    Int16Array,
    Int32Array,
    Map,
    Number,
    Object,
    Promise,
    Proxy,
    RangeError,
    ReferenceError,
    RegExp,
    Set,
    SharedArrayBuffer,
    String,
    Symbol,
    SyntaxError,
    TypeError,
    Uint8Array,
    Uint8ClampedArray,
    Uint16Array,
    Uint32Array,
    URIError,
    WeakMap,
    WeakSet,
    Atomics,
    JSON,
    Math,
    Reflect
];

let current;

while (queue.length) {
    current = queue.shift();
    if (set.has(current))
        continue;
    set.add(current);
    console.log(current)

    for (let p of Object.getOwnPropertyNames(current)) {
        var property = Object.getOwnPropertyDescriptor(current, p);

        if (property.hasOwnProperty("value") && property.value instanceof Object)
            queue.push(property.value);

        if (property.hasOwnProperty("getter")) {
            queue.push(property.getter)
        }

        if (property.hasOwnProperty("setter")) {
            queue.push(property.setter)
        }
    }
}