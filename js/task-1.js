const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(item => {
  const title = item.querySelector('h2');
  const subItems = item.querySelectorAll('li');
  console.log('Category:', title.textContent);
  console.log('Elements:', subItems.length);
});
