fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getIndexFromName(abdallah) {
     const index = fruits.indexOf(abdallah)
         if (index === -1)
      return null

        return index
 }

const abdallah="Mango"
displayResult(getIndexFromName(abdallah));
