function serialize(data) {
    let outputBuffer = [];
    for (let key in data) {
        if (key != parseInt(key)) {
            outputBuffer.push(Buffer.concat([
                Buffer.from([key.length]), // 1 byte
                Buffer.from(key) // n bytes
            ]));
        }
        let value = data[key];
        switch (typeof value) {
            case 'string':
                let length = value.length;
                let type = 0b00001000 | byteSize(length);
                outputBuffer.push(Buffer.concat([
                    Buffer.from([type, length]),
                    Buffer.from(value)
                ]));
                break;

            case 'boolean':
                break;

            case 'function':
                break;

            case 'symbol':
                break;

            case 'undefined':
                break;

            case 'number':
                if (Number.isInteger(value)) {
                    if (value >= -128 && value <= 127) {
                        break;
                    } else if (value >= -32768 && value <= 32767) {
                        break;
                    } else if (value >= -2147483648 && value <= 2147483647) {
                        break;
                    } else if (value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER) {
                        break;
                    } else {
                        console.error(`Integer ${value} is not within safe integer range.\nExpected range: ${Number.MIN_SAFE_INTEGER} to ${Number.MAX_SAFE_INTEGER}.`);
                        break;
                    }
                } else {
                    Math.fround(value) === value ? 'f32' : 'f64';
                    break;
                }
                
            case 'object':
                if (value === null) {
                    break;
                } else if (Array.isArray(value)) {
                    break;
                } else {
                    break;
                }
        }
    }
    outputBuffer = Buffer.concat(outputBuffer);
    console.log(outputBuffer);
}

function byteSize(value) {
    if (value < 256) {
        return 0b00000000; // 1 byte
    } else if (value < 65536) {
        return 0b00100000; // 2 bytes
    } else if (value < 4294967296) {
        return 0b01100000; // 4 bytes
    } else {
        return 0b11100000; // 8 bytes
    }
}

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

let data2 = [1, 2, 3]
let data3 = {
    string: 'string',
}

serialize(data2);