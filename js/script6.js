// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }
// let inputVal = document.getElementById("validation-input");

// let totalLenght = inputVal.getAttribute("data-length");
// let intTotallenght = parseInt(totalLenght, 10);

// inputVal.oninput = function () {
//   if (inputVal.value.length === intTotallenght) {
//     inputVal.classList.remove("invalid");
//     inputVal.classList.add("valid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
//     inputVal.classList.add("invalid");
//   }
// };
// const inputEl = document.getElementById(`validation-input`);
// inputEl.addEventListener(`input`, onBlurValidation);
// function onBlurValidation(event) {
//   if (
//     event.currentTarget.value.length ===
//     Number(event.currentTarget.dataset.length)
//   ) {
//     inputEl.classList = `valid`;
//   } else if (event.currentTarget.value.length === 0) {
//     inputEl.classList = ``;
//   } else {
//     inputEl.classList = `invalid`;
//   }
// }
// const inputEl = document.getElementById("validation-input");
// inputEl.addEventListener("blur", () => {
//   if (inputEl.value.length === Number(inputEl.dataset.length)) {
//     inputEl.classList = "valid";
//   } else if (inputEl.value.length === 0) {
//     inputEl.classList = " ";
//   } else {
//     inputEl.classList = "invalid";
//   }
// });
const inputEl = document.getElementById('validation-input');

function makeCheckValidation(event) {
  if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else if (event.target.value.length !== 0 && event.target.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
  else if (inputEl.value.length === 0) {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
};

inputEl.addEventListener('blur', makeCheckValidation);