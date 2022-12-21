const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories:` + itemsEl.length);

itemsEl.forEach(element => {
  console.log(`Category:` + element.firstElementChild.textContent);
  const category = element.querySelectorAll('li');
  console.log(`Elements:` + category.length);
});
