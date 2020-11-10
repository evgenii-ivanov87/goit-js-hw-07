const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории`)
const titelRef = document.querySelectorAll('h2');
const appp = titelRef.forEach((value) => 
{   const listRef = value.nextElementSibling
    console.log(`Категория: ${value.textContent}`);
    console.dir(`Количество элементов: ${listRef.childElementCount}`)
    
}) 




