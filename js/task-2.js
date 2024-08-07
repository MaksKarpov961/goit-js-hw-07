const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];




// знаходимо елемент
const gallery = document.querySelector(".gallery")

// робимо буфер
const fragment = document.createDocumentFragment();

// запускаєм цикл для додавання 3 картинок 
for (let index = 1; index < 4; index++) {
  const image = images[index];
  
  // створюємо нові елементи li та img
  const newListItem = document.createElement("li")
  const newImage = document.createElement("img")
  
  // встановлюємо атрибути для img
  newImage.src = image.url
  newImage.alt = image.alt
  newImage.width = 360
  
  // додаємо img до li
  newListItem.appendChild(newImage)

  // додаємо li (в якому вже є img) до буфера
  fragment.appendChild(newListItem)
  
}

// після виконнання циклу (і наповненням буфера) додаємо це все в ul 
gallery.appendChild(fragment)