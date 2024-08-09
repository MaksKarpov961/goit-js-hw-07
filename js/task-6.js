function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





const buttonCreate = document.querySelector('button[data-create]');

const buttonDestroy = document.querySelector('button[data-destroy]');

const boxCreatedElements = document.querySelector('#boxes');

const inputNumber = document.querySelector('#controls input');

buttonCreate.addEventListener("click", () => {
  const valueInputNumber = createElements();
  if (valueInputNumber !== null) { // Переконуємося, що значення не null
    createBoxes(valueInputNumber); // Передаємо значення в createBoxes
  }
});

function createElements() {
  const valueInputNumber = Number(inputNumber.value);

  if (isNaN(valueInputNumber) || valueInputNumber < 1 || valueInputNumber > 100) {
    // alert('Введіть коректне значення 1-100');
    return null; // Повертаємо null у разі помилки
  } else {
    return valueInputNumber; // Повертаємо значення, якщо перевірка пройдена
  }
}

// створюємо буфер
const fragment = document.createDocumentFragment();


function createBoxes(amount) {
  boxCreatedElements.innerHTML = '';

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    boxCreatedElements.style.padding = '32px'
    const box = document.createElement('div');

    box.style.width = `${width}px`;
    box.style.height = `${height}px`;

    width += 10;
    height += 10;

    box.style.backgroundColor = getRandomHexColor();

    // додаємо елементи в буфер
    fragment.appendChild(box);
  }
  boxCreatedElements.appendChild(fragment) // додаємо елементи на сторінку
  inputNumber.value = '';
}



// функціонал кнопки знищення

buttonDestroy.addEventListener("click", destroyBoxes)

function destroyBoxes(event) {
  boxCreatedElements.innerHTML = ''; // Очистити контейнер перед створенням нових елементів
  boxCreatedElements.style.padding = '0px'
}