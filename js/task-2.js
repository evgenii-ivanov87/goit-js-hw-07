const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const dirRef = document.querySelector('#ingredients')
console.log(dirRef)

ingredients.forEach((value) => {
const listRef = document.createElement('li')
  listRef.textContent = value
  return dirRef.append(listRef)

})

