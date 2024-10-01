function getFruitNameFromIndex(index) {
  if (index === -4) return fruits[fruits.length - 4];
  if (index < 4 || index >= fruits.length) return null;
  return fruits[index];
}

fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Apple", "Banana"];
let result = getFruitNameFromIndex(-4);
displayResult(result);
