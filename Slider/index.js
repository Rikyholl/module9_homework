const nextBtn = document.querySelector('#next'); 
const prevBtn = document.querySelector('#prev');

const slides = document.querySelectorAll('.slider_item'); // Находим все картинки-слайды
const slidesPoint = document.querySelectorAll('.rect'); // Находим все точки
const cities = document.querySelectorAll('.nav_link'); // Находим города-навигацию

const nameCity = document.querySelector('#city'); // Блок с названием города
const area = document.querySelector('#apart');  // Блок с площадью 
const date  = document.querySelector('#time');  // Блок датой


// Данные, которые относятся к опредленному слайду
const aboutCity = [
    {
        city: "Rostov-on-Don LCD admiral", // город
        apart: "81 m2", // площадь
        time: "3.5 months",  // срок
    }, 
    {
        city: "Sochi \n Thieves",
        apart: "105 m2",
        time: "4 months", 
    },
    {
       
        city: "Rostov-on-Don \n Patriotic",
        apart: "93 m2",
        time: "3 months", 
    }
];

let currentIndex = 0; 

// Функция добавления класса отображения элемента
function activeSlide (index){

    // Счетчик элементов, которым можно добавить класс, а предущему ему элементу класс удалить
    for (let i = 0; i < slides.length; i++){ 

        slides[i].classList.remove('hidden');
        slides[index].classList.add('hidden');

        slidesPoint[i].classList.remove('active');
        slidesPoint[index].classList.add('active');

        cities[i].classList.remove('nav_link-active');
        cities[index].classList.add('nav_link-active');

        nameCity.innerText = aboutCity[index].city;
        area.innerText = aboutCity[index].apart;
        date.innerText = aboutCity[index].time;
    }
}

// Отслеживание клика по точкам
slidesPoint.forEach(function(item, indexPoint){

    item.addEventListener('click', function (){

        currentIndex = indexPoint;
        activeSlide(currentIndex);
    });
});

// Отслеживание клика навигции (городов)
cities.forEach(function(item, indexCity){

    item.addEventListener('click', function (){

        currentIndex = indexCity;
        activeSlide(currentIndex);
    });
});

// Клик кнопки вперед
nextBtn.addEventListener('click', function(){

    if (currentIndex == slides.length - 1){

        currentIndex = 0;
        activeSlide(currentIndex);
    } else {

        currentIndex++;
        activeSlide(currentIndex);
    }
});

// Клик кнопки назад
prevBtn.addEventListener('click', function(){

    if (currentIndex == 0){

        currentIndex = slides.length - 1;
        activeSlide(currentIndex);
    } else {
        currentIndex--;
        activeSlide(currentIndex);
    }
});