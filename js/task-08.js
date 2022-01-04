const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('[type="email"]'),
    password: document.querySelector('[type="password"]'),
    btn: document.querySelector('[type="submit"]')
};

const foo = (event) => {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    }
    if (email === "" || password === "") {
       const message = "Заполните все поля!"
        alert(message)
    };
    
    console.log(formData);
    event.currentTarget.reset();
};



refs.form.addEventListener('submit', foo)
