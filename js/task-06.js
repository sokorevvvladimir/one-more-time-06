const refs = {
    input: document.querySelector('#validation-input'),
};
console.log(refs.input.dataset.length)
const foo = (event) => {
    if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
      return event.currentTarget.classList.add("invalid")
    };
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid")
};

refs.input.addEventListener('blur', foo);