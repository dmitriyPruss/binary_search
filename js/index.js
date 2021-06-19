'use strict';

// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.


// console.log('searchValue() :>> ', searchValue());

function searchValue() {

    let start = 0;
    let end = 100;
    let middle;

    while (start <= end) {

        middle = Math.floor( (start + end) / 2 );

        if (end - middle === 1) {
            if ( confirm(`Это число ${middle}?`) ) {
                alert(`Угадали! Это число ${middle}`);
                return middle;
            } else if ( confirm(`Или это число ${end}?`) ) {
                alert(`Угадали! Это число ${end}`);
                return end;
            } else {
                return 'Не получилось угадать число';
            };
        }; 

        if ( confirm(`Это число больше ${middle}?`) ) {
            start = middle;
        } else {
            end = middle;
        };
    };
};

