const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', event => {
 
    inputRef.classList.add(event.target.value.length === Number(inputRef.dataset.length) ?
        'valid' :       
        'invalid'
        )
    })

    inputRef.addEventListener('focus', event => {
 
    inputRef.classList.remove(event.target.value.length === Number(inputRef.dataset.length) ?
        'valid' :       
        'invalid'
        )
    })

