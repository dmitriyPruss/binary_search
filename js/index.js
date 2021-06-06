'use strict';

// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.


function searchValue() {

    const num = +prompt('Enter a number');
    

    let start = 0;
    let end = 100;
    let middle;

    for(let i = start; i <= end; i++) {

        console.log('start :>> ', start);
        console.log('end :>> ', end);

        middle = Math.floor( (start + end) / 2 );
        const question = confirm(`Число больше либо равно ${middle}? Спойлер) - ${num}`);

        
        if (num === middle) {
            return num;
        } else if (question) {
            start = middle;
        } else {
            end = middle;
        }
    };
};

console.log('searchValue() :>> ', searchValue());;