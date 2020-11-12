let value = 0;

function increment()  {
    value += 1
    render()
}

function decrement()  {
    value -= 1
    render()
}

function render() {
    counterValue.textContent = value;
}

const discRef = document.querySelector('button[data-action="decrement"]')
const incrRef = document.querySelector('button[data-action="increment"]')
const counterValue = document.querySelector('#value')


incrRef.addEventListener('click', increment)
discRef.addEventListener('click', decrement)
