'use strict';

// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.


// console.log('searchValue() :>> ', searchValue());

function searchValue() {

    let question;
    let start = 0;
    let end = 100;
    let middle;

    for(let i = 0; ; i++) {

        if (start <= end) {
            middle = Math.floor( (start + end) / 2 );

            question = confirm(`Это число больше ${middle}?`);
    
            if (end - middle === 1) {

                question = confirm(`Это число ${middle}?`);

                if (question) {
                    alert(`Угадали! это число ${middle}`);
                    return middle;
                } else {
                    question = confirm(`Или это число ${end}?`);

                    if (question) {
                        alert(`Угадали! это число ${end}`);
                        return end;
                    } else {
                        return 'Не получилось угадать число';
                    };
                };
            }; 

            if (question) {
                start = middle;
            }; 
            if (!question) {
                end = middle;
            };
        };
    };
};

