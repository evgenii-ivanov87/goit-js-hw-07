const inputRef = document.querySelector('#font-size-control')
const textAreaRef = document.querySelector('#text')

inputRef.addEventListener('change', e => {

textAreaRef.style.fontSize = `${e.target.value}px`
   
})

