const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  list: document.querySelector('#ingredients'),
};

const a = ingredients => {
  return ingredients.map(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add('item');
    return li
  });
}

const res = a(ingredients);

refs.list.append(...res)