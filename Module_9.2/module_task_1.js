/*
const parser = new DOMParser(); // Создание экзампляра класса DOMParser

const xmlString = `
    <list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml'); //Парсинг XML

// Получение всех DOM-

const studentNode = xmlDOM.querySelector("student");
const nameNode = xmlDOM.querySelector("name");
const firstNode = xmlDOM.querySelector("fisrt");
const secondNode = xmlDOM.querySelector("second");
const agedNode = xmlDOM.querySelector("age");
const profNode = xmlDOM.querySelector("prof");

// console.log('nameNode', nameNode.textContent);
// console.log('ageNode', agedNode.textContent);

// Получение данных из атрибутов

const nameAttr = nameNode.getAttribute('lang');

const result = {
    name: nameNode.textContent, 
    age: agedNode.textContent, 
    prof: profNode.textContent, 
    lang: nameAttr 
}

console.log('result', result);

*/


const jsonString = `
    {
        "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
        ]
    }
`;


const data = JSON.parse(jsonString);

// console.log('data', data);
const list = data.list;

console.log('list', list);