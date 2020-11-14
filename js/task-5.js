const inputRef = document.querySelector('#name-input')
const textRef = document.querySelector('#name-output')

const textDefault = textRef.textContent

inputRef.addEventListener('input', event => {
    event.preventDefault()
     
    textRef.textContent = event.target.value
     
  if (event.data === null) {
      textRef.textContent = textDefault
    }
        
})
