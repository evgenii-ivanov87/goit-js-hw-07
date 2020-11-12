const inputRef = document.querySelector('#name-input')
const textRef = document.querySelector('#name-output')


inputRef.addEventListener('input', event => {
    event.preventDefault()
    textRef.textContent = event.target.value
})
