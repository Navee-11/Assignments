/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// module.exports = calculateTotalSpentByCategory;
const items = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 5,
    category: "Beverage",
    itemName: "Coffee",
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 20,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 4,
    timestamp: 1656336000000,
    price: 15,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 5,
    timestamp: 1656422400000,
    price: 30,
    category: "Clothing",
    itemName: "Jacket",
  },
  {
    id: 6,
    timestamp: 1656508800000,
    price: 25,
    category: "Electronics",
    itemName: "Smartphone",
  },
  {
    id: 7,
    timestamp: 1656595200000,
    price: 8,
    category: "Beverage",
    itemName: "Tea",
  },
  {
    id: 8,
    timestamp: 1656681600000,
    price: 12,
    category: "Food",
    itemName: "Salad",
  },
  {
    id: 9,
    timestamp: 1656768000000,
    price: 50,
    category: "Clothing",
    itemName: "Shoes",
  },
  {
    id: 10,
    timestamp: 1656854400000,
    price: 7,
    category: "Beverage",
    itemName: "Juice",
  },
];

function calculateTotalSpentByCategory(transactions) {
  let total = items.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 0;
    }
    acc[curr.category] = acc[curr.category] + curr.price;
    return acc;
  }, {});

  return Object.keys(total).map((item) => ({
    category: item,
    totalSpent: total[item],
  }));
}
console.log(calculateTotalSpentByCategory(items));
