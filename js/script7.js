// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" />
//     <br />
//     <span id="text">Абракадабра!</span>
// const controlFont = document.getElementById("#font-size-control");

// const text = document.getElementById("#text");

// controlFont.oninput = function () {
//   text.style.fontSize = controlFont.value + "px";
// };
// const controlEl = document.getElementById(`font-size-control`);
// const textEl = document.getElementById(`text`);

// controlEl.addEventListener("input", onInputFontSizeChange);

// function onInputFontSizeChange(event) {
//   textEl.style.fontSize = event.currentTarget.value + "px";
// }
const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeTextFont = event => {
  textEl.style.fontSize = `${event.target.value}px`;
};

fontSizeControlEl.addEventListener('input', changeTextFont);