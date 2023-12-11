const fs = require('fs');

function toBinary(file, string) {
    fs.writeFile(file, Uint8Array.from(string, c => c.charCodeAt(0)), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

let mask = [
    [0, 1, 1, 0, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 0, 1],
];

function writeBitmask(byte_width, mask) {
    let bytemask = [];
    for (let i = 0; i < mask.length; i++) {
        let byte = mask[i];
        for (let j = 0; j < byte.length; j++) {
            let bit = byte[j];
            for (let k = 0; k < byte_width; k++) {
                bytemask.push(bit);
            }
        }
    }
}

