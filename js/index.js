'use strict';

// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.

function searchValue() {

    const num = +prompt('Enter a number');

    if (typeof num !== 'number') {
        throw new RangeError('num is not a number!');
    };
    if (Number.isNaN(num) || !Number.isSafeInteger(num) || num < 0 || num > 100 ) {
        throw new RangeError('False value for num!');
    };

    let start = 0;
    let end = 100;
    let middle;

    for(let i = 0; ; i++) {

        middle = Math.ceil( (start + end) / 2 );
        const question = confirm(`Число больше либо равно ${middle}? Спойлер - ${num} )`);

        if (num < start || num > end) {
            throw new RangeError('False range sequence!');
        };

        if (num === middle) {
            return num;
        } else if (question) {
            start = middle + 1;
        } else {
            end = middle - 1;
        };
    };
};

console.log('searchValue() :>> ', searchValue());;