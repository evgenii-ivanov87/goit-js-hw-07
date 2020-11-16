const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulRef = document.querySelector('#ingredients')
const createList = ingredients.map(value => {
    const newList = document.createElement('li');
  newList.textContent = value;
  
    return newList;
})
  ulRef.append(...createList)

