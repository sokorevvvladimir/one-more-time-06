const refs = {
    div: document.querySelector('[id="counter"]'),
    span: document.querySelector('#value'),
    decrBtn: document.querySelector('[data-action="decrement"]'),
    incrBtn: document.querySelector('[data-action="increment"]')
};

let counterValue = 0;

const makeDecr = () => {
    counterValue -= 1;
    refs.span.textContent = counterValue;
};

const makeIncr = () => {
    counterValue += 1;
    refs.span.textContent = counterValue;
}

refs.decrBtn.addEventListener("click", makeDecr);
refs.incrBtn.addEventListener("click", makeIncr);
