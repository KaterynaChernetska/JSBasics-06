const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let list = document.querySelector('.ingredients');

function renderList(array) {
  array.map(element => {
    const newItem = document.createElement('li');
    newItem.textContent = element;
    newItem.classList.add('item');
    list.append(newItem);
  });
}

renderList(ingredients);
console.log(list);