const inputRef = document.querySelector('#name-input')
const textRef = document.querySelector('#name-output')


inputRef.addEventListener('input', event => {
    event.preventDefault()
    
    const target = event.target.value
    
      textRef.textContent = target
    
})
