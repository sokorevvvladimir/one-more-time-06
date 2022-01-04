const refs = {
    mainList: document.querySelector('#categories'),
    items: document.querySelectorAll('.item'),
};
console.log(refs.items);

const numberOfCat = refs.mainList.children.length;

console.log('Number of categories:', numberOfCat);

const foo = (args) => {
    
    return [...args].map(item => {
        console.log('Category:', item.firstElementChild.textContent);
        console.log('Elements:', item.lastElementChild.children.length)
    });
    
};

foo(refs.items);

