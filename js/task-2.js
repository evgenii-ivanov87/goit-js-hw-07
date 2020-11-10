const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const dirRef = document.querySelector('#ingredients')

const listRef = document.createElement('li')
ingredients.forEach((value) => listRef.textContent = value
  
)
console.log(listRef)
dirRef.append(listRef)

