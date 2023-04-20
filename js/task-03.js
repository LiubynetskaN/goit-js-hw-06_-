const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector(".gallery")

// const items = ingredients.map(ingredient => {
//   const element = document.createElement("li")
//   element.textContent = ingredient
  
//   element.classList.add("item")
//   console.log(element)
  
//   return element
// })

const imageList = images.map(image => {
  const element = `<li class="item-img">
  <img src="${image.url}" alt="${image.alt}" width=500/>
  </li>`
  console.log(element)
  return element
})
 
const string = imageList.join("")
galleryEl.insertAdjacentHTML("afterBegin", string)
