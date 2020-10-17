// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// < div id = "controls" >
//     <input type="number" min="0" max="100" step="1" />
//     <button type="button" data-action="render">Создать</button>
//     <button type="button" data-action="destroy">Очистить</button>
// </ >

//     <div id="boxes"></div>
// const render = document.querySelector('[data-action="render"]');
// const destroy = document.querySelector('[data-action="destroy"]');
// const boxes = document.getElementById("boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   let amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   let basicSize = 30;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     let size = basicSize + i * 10;
//     const div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }
const inputControlsEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

const getRandomColor = () => {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = amount => {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let boxes = document.createElement('div');
    boxes.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomColor()}`;
    fragment.appendChild(boxes);
  }
  boxesEl.appendChild(fragment);
};

const getAmount = () => {
  const amount = inputControlsEl.value;
  createBoxes(amount);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
};

renderBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes); 