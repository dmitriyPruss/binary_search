'use strict';

// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.

function searchValue() {

    let start = 0;
    let end = 100;
    let middle;

    for(let i = 0; ; i++) {

        middle = Math.ceil( (start + end) / 2 );
       
        if (start > end) {
            start = end;
        };

        if (middle > end) {
            middle = end;
        };


        const question = confirm(`Число больше ${middle}?`);

        console.log(`middle - ${middle}, start - ${start}, end - ${end}`);

        if (start === middle) {
            return start;
        } else if (question) {
            start = middle;
        } else {
            end = middle - 1;
        };
    };
};

console.log('searchValue() :>> ', searchValue());;