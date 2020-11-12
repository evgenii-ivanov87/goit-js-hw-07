const inputRef = document.querySelector('#validation-input')
console.dir(inputRef)
console.dir(inputRef.dataset.length)

inputRef.addEventListener('change', event => {
    console.log(event)
    console.log(event.target.value.length)

    if (event.target.value.length !== inputRef.dataset.length)
    { inputRef.classList.add('invalid') }
    else  { inputRef.classList.add('valid') } 
   
})