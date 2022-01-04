const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

const foo = (event) => {
    if (event.currentTarget.value !== "") {
        return refs.span.textContent = event.currentTarget.value
    }
    
     return refs.span.textContent = "Anonymous"
    
}
    
refs.input.addEventListener('input', foo);