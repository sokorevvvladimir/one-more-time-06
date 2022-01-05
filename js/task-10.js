function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const createBoxes = amount => {
  let divs = [];
  for (let index = 1; index <= amount; index +=1){
    const div = document.createElement("div");
    const color = getRandomHexColor();
    div.style.width = index * 10 - 10 + 30 + 'px';
    div.style.height = index * 10 - 10 + 30 + 'px';
    div.style.backgroundColor = color;
  
    divs.push(div);
   
  };
  return divs;
}

const foo = () => {
  const quantity = refs.input.value;
  const markup = createBoxes(quantity);
  console.log(markup)
  return refs.boxes.append(...markup);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
};

refs.btnCreate.addEventListener('click', foo);
refs.btnDestroy.addEventListener('click', destroyBoxes);