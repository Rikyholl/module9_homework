const btn = document.querySelector('.btn'); 
const requestURL = 'https://picsum.photos/v2/list?limit=10';
const showResultHtml = document.querySelector('.result');


function useRequest(url, callback){

    let xhr = new XMLHttpRequest();

    // Инициализация запроса
    xhr.open('GET', url);

    // Обработчик ответа сервера
    xhr.onload = function(){

        if (xhr.status != 200){// HTTP ошибка
            //Если статус не 200 (указывает, что запрос выполнен успешно), то обрабатываем отдельно
            console.log('Статус ответа: ', xhr.status);
        } else {

            let result = JSON.parse(xhr.response);

            if (callback)
                callback(result);

        }
    };

    xhr.onprogress = function(event){

        //Выводим прогресс загрузки
        console.log(`Загружено ${event.loaded} из ${event.total}`);
    };

    //Добавляем обработчик ошибки 
    xhr.onerror = function(){

        //Обработываем ошибку, не связанную с HTTP (например, нет соединения)
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};


function displayResult(apiData){

    let cards = '';

    apiData.forEach(item => {

        const cardBlock = `
        
        <div class="card">
            <img src="${item.download_url}" class="card_image" />

            <p> ${item.author} </p>
        </div>
        `;
       
        cards += cardBlock;
    });

    showResultHtml.innerHTML = cards;
};

btn.addEventListener('click', function(){

    let getParam, getUrl;

    const inputValue = document.querySelector('.input').value;

    if (inputValue < 1 || inputValue > 10){
        console.log('Число вне диапазона от 1 до 10');
    } else {

        // Получение ссылки
        getParam = requestURL.split('=');
        getParam[1] = inputValue;
        getUrl  = getParam.join('=');
        

        useRequest(getUrl, displayResult);
    }
}); 


