let data = {
    string: 'string',
    int: 23,
    float32: 3.140000104904175,
    float64: 3.14,
    bool: true,
    array: [1, 2, 3],
    object: {
        foo: 'bar'
    },
    null: null,
    undefined: undefined,
    function: function () {},
    symbol: Symbol('symbol')
}

let jason = JSON.stringify(data);
console.log(jason);

for (let key in data) {
    switch (typeof data[key]) {
        case 'string':
            console.log('string');
            break;

        case 'boolean':
            console.log('boolean');
            break;

        case 'function':
            console.log('function');
            break;

        case 'symbol':
            console.log('symbol');
            break;

        case 'undefined':
            console.log('undefined');
            break;

        case 'number':
            if (Number.isInteger(data[key])) {
                if (data[key] >= -128 && data[key] <= 127) {
                    console.log('int8');
                } else if (data[key] >= -32768 && data[key] <= 32767) {
                    console.log('int16');
                } else if (data[key] >= -2147483648 && data[key] <= 2147483647) {
                    console.log('int32');
                } else if (data[key] >= Number.MIN_SAFE_INTEGER && data[key] <= Number.MAX_SAFE_INTEGER) {
                    console.log('int64');
                } else {
                    console.error(`Integer ${data[key]} is not within safe integer range.\nExpected range: ${Number.MIN_SAFE_INTEGER} to ${Number.MAX_SAFE_INTEGER}.`);
                }
            } else {
                console.log(Math.fround(data[key]) === data[key] ? 'f32' : 'f64');
            }
            break;

        case 'object':
            if (data[key] === null) {
                console.log('null');
            } else if (Array.isArray(data[key])) {
                console.log('array');
            } else {
                console.log('object');
            }
            break;
    }
}