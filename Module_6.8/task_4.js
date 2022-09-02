/*
    Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль,
    начиная от первого и заканчивая вторым. Используйте setInterval.

    Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
    начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/


let firstNum = prompt("Введите первое число:");
let lastNum = prompt("Введите последнее число:");


function printNumbers(firstNum, lastNum ){


    let from = firstNum;

    let timerId = setInterval(function(){

        console.log(from);

        if (from == lastNum){

            clearInterval(timerId);
        }

        from++;
    }, 1000);
}

printNumbers(firstNum, lastNum);

