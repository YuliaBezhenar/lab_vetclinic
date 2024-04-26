//послуги
let service = [];
service[0] = {
    name: "Вакцинація",
    price: "200-750 грн"
};
service[1] = {
    name: "Консультація",
    price: "400 грн"
}; 
service[2] = {
    name: "Хірургія",
    price: "1500-8000 грн"
};
service[3] = {
    name: "Прийом дерматолога",
    price: "400 грн"
};
service[4] = {
    name: "УЗД",
    price: "300-500 грн"
};
service[5] = {
    name: "Прийом кардіолога",
    price: "400-500 грн"
};
service[6] = {
    name: "Онкологія",
    price: "500-1200 грн"
};
service[7] = {
    name: "Прийом офтальмолога",
    price: "400 грн"
};
service[8] = {
    name: "Лабараторні аналізи",
    price: "300-1000 грн"
};
service[9] = {
    name: "Нефрологія",
    price: "400 грн"
};


// Отримання елементу ul для послуг
let servicesList = document.querySelector('.services-list');

// Додавання кожної послуги в список
service.forEach(item => {
    let li = document.createElement('li');
    let nameParagraph = document.createElement('p');
    let priceParagraph = document.createElement('p');
    
    nameParagraph.textContent = item.name;
    priceParagraph.textContent = item.price;

    li.appendChild(nameParagraph);
    li.appendChild(priceParagraph);

    servicesList.appendChild(li);
});