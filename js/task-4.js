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

const discRef = document.querySelector('.js-decrement')
const incrRef = document.querySelector('.js-increment')
const counterValue = document.querySelector('#value')


incrRef.addEventListener('click', increment)
discRef.addEventListener('click', decrement)
