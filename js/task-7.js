const inputRef = document.querySelector('#font-size-control')
const textAreaRef = document.querySelector('#text')

console.dir(inputRef)
console.dir(textAreaRef.style.fontSize)
textAreaRef.style.fontSize = 10
console.dir(textAreaRef.style.fontSize)


inputRef.addEventListener('change', e => {
    textAreaRef.style.fontSize = Number(e.target.value)
    console.log(e.target.value)
    console.dir(textAreaRef.style.fontSize)
})

