//послуги
//ветеринари
//1 Шекера Т. К.
//2 Філіпенко М. О.
//3 Цар Й. Б.
//4 Гаценко С. Я.
//5 Нечипорук Є. П.
//6 Хижняк В. О.
let service = [];
service[0] = {
    name: "Вакцинація",
    price: "200-750 грн",
    vets: ['Шекера Т. К.', 'Філіпенко М. О.', 'Цар Й. Б.']
};
service[1] = {
    name: "Консультація",
    price: "400 грн",
    vets: ['Гаценко С. Я.', 'Шекера Т. К.', 'Філіпенко М. О.', 'Цар Й. Б.', "Нечипорук Є. П.", "Хижняк В. О."]
}; 
service[2] = {
    name: "Хірургія",
    price: "1500-8000 грн",
    vets: ['Шекера Т. К.', 'Нечипорук Є. П.', 'Цар Й. Б.']
};
service[3] = {
    name: "Прийом дерматолога",
    price: "400 грн",
    vets: ['Нечипорук Є. П.', 'Філіпенко М. О.', 'Гаценко С. Я.']
};
service[4] = {
    name: "УЗД",
    price: "300-500 грн",
    vets: ['Шекера Т. К.', 'Хижняк В. О.']
};
service[5] = {
    name: "Прийом кардіолога",
    price: "400-500 грн",
    vets: ['Хижняк В. О.', 'Філіпенко М. О.', 'Цар Й. Б.']
};
service[6] = {
    name: "Онкологія",
    price: "500-1200 грн",
    vets: ['Шекера Т. К.', 'Нечипорук Є. П.', 'Гаценко С. Я.']
};
service[7] = {
    name: "Прийом офтальмолога",
    price: "400 грн",
    vets: ['Шекера Т. К.', 'Цар Й. Б.', 'Нечипорук Є. П.']
};
service[8] = {
    name: "Лабараторні аналізи",
    price: "300-1000 грн",
    vets: ['Філіпенко М. О.', 'Гаценко С. Я.', 'Хижняк В. О.']
};
service[9] = {
    name: "Нефрологія",
    price: "400 грн",
    vets: ['Хижняк В. О.']
};


//Створення списку послуг з цінами
let servicesList = document.querySelector('.services-list');
servicesList.innerHTML = '';
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

let form = document.getElementById("form");
function handleSubmit(event) {
    //Отримання значень ветеринара і послуги
    let serviceValue = document.getElementById("service").value;
    let vetValue = document.getElementById("vet").value;

    if (serviceValue === "" || vetValue === "") {
        event.preventDefault(); //Попереднє зупинення дії за замовчуванням
        alert("Будь ласка, оберіть послугу та ветеринара!");
        return;
    }
}

form.addEventListener("submit", handleSubmit);


//Створення option для послуг в формі
function updateServices() {
     let serviceSelect = document.getElementById("service");

    service.forEach((item, index) => {
        let option = document.createElement("option");
        option.text = item.name;
        option.value = index + 1;
        serviceSelect.add(option);
    });
 }

//Створення option для ветеринарів в формі
function updateVets() {
    let serviceIndex = document.getElementById("service").value - 1; //iндекс обраної послуги
    let vetsSelect = document.getElementById("vet");
    let serviceValue = document.getElementById("service").value;
    if (serviceValue != "") {
        vetsSelect.innerHTML = ""; //очистити вміст

    //Додати ветеринарів, які відповідають обраній послузі
    service[serviceIndex].vets.forEach(vet => {
        let option = document.createElement("option");
        option.value = vet;
        option.text = vet;
        vetsSelect.add(option);
    });
    };
    
}
updateServices();
document.getElementById("service").addEventListener("change", updateVets);

updateVets();


