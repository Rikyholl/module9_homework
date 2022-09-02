/*
    Написать функцию, которая принимает число как аргумент и возвращает функцию, 
    которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
    Выведите в консоль результат.
*/ 

function sum_numbers(num_1){

    console.log('Число №1 - ' + num_1);

    return function(num_2){
        
        console.log('Число №2 - ' + num_2);
        return num_1 + num_2;
    }
}

const result = sum_numbers(7);

console.log('Сумма числа №1 и 2 = ' + result(3));