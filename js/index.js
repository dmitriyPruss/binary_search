'use strict';

// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.

// function searchValue() {

//     let start = 0;
//     let end = 100;
//     let middle;

//     for(let i = 0; ; i++) {

//         if (start <= end) {
//             middle = Math.ceil( (start + end) / 2 );
//             console.log(`Before: start - ${start}, middle - ${middle}, end - ${end}`);

//             const question = confirm(`Число больше ${start} и меньше либо равно ${end}?`);
    
//             console.log(`After: start - ${start}, middle - ${middle}, end - ${end}`);

//             if (start === end && start === middle && start === end) {
//                 alert('Угадали!');
//                 return start;
//             }; 
//             if (question) {
//                 start = middle;
//             }; 
//             if (!question) {
//                 end = middle;
//                 if (middle === 0) end = 0;
//             };
//         }
//     };
// };

// console.log('searchValue() :>> ', searchValue());



function searchValue() {

    let arr = [];
    let middle;
    let start = 0;
    let end = 100;

    for(let i = 0; ; i++) {

        if (start <= end) {
            middle = Math.floor( (start + end) / 2 );

            console.log(`Before: start - ${start}, middle - ${middle}, end - ${end}`);

            let question = confirm(`Это число больше ${middle}?`);
    
            console.log(`After: start - ${start}, middle - ${middle}, end - ${end}`);

            if (end - start === 1) {
                arr = [start, end];

                for(let i = 0; i < arr.length; i++) {
                    question = confirm(`Это число ${arr[i]}?`);

                    if (question) {
                        return arr[i];
                    }; 
                };
                arr = [];
            }; 

            if (question) {
                start = middle;
            }; 
            if (!question) {
                end = middle;
            };
        }
    };
};

console.log('searchValue() :>> ', searchValue());