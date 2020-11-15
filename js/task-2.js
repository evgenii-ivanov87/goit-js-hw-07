const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const dirRef = document.querySelector('#ingredients')
const appendList = ingredients.map(value => newList(value))


function newList(value) {
  const listRef = document.createElement('li')
  listRef.textContent = value
  return dirRef.append(listRef)
}
