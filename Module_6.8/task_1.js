/* Задание 1.
    Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
    Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
    При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
    Оформить в виде функции.
*/

function even_odd_number(){

    let arr = [1, 553, "string", 90641, 909, 34, "ыне", null, 1111, false];

    let countEven = 0, countOdd = 0, countZero = 0, count = 0; //счетчик четных и нечетных чисел, а также нулевых эелементов
    
    for (let i = 0; i < arr.length; i++){
    
        // Проверяем нечисловые значения
        if (typeof arr[i] == "string" || typeof arr[i] == "symbol" || typeof arr[i] == "boolean" || typeof arr[i] == "object"){
    
            count++;
        } else  if (arr[i] == 0){
            countZero++;
        } else if (arr[i] % 2 == 0){ // если не имеет остатка, значит число четное
            countEven++;
        } else {
            countOdd++;
        }
    }

    console.log(arr);
    
    console.log("Количество четных = " + countEven);
    console.log("Количество нулевых элементов = " + countZero);
    console.log("Количество нечетных = " + countOdd);
    console.log("Количество нечисловых значений = " + count);
}

even_odd_number();

