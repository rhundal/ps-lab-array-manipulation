/*

Task 1: Array Manipulation Basics
Create an empty array called shoppingList.
Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
Write a function called removeLastItem that removes the last item from the shoppingList array.
Write a function called displayList that logs all items in the shoppingList array to the console.

*/

let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  shoppingList.forEach((item) => console.log(item));
}

// Testing Code starts

// addItem("orange");
// addItem("apple");
// addItem("eggs");

// displayList();

// removeLastItem();

// displayList();

// removeLastItem();

// displayList();

// Testing Code ends

/*
Task 2: Filter and Search an Array
Modify the addItem function to only add the item if it is not already in the shoppingList array.
Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).

*/

function modifiedAddItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
  }
}

function filterItems(termToSearch) {
  let matchesFound = shoppingList.filter((item) => {
    return item.toLowerCase().includes(termToSearch);
  });

  return matchesFound;
}

// Testing Code starts

// console.log(
//   "-------------------- calling the new modifiedAddItem method ---------------- ",
// );
// modifiedAddItem("Water bottle");
// modifiedAddItem("New mango");
// modifiedAddItem("nike shoes");
// modifiedAddItem("green water was fresh");

// displayList();

// console.log(
//   "-------------------- calling the filter items method ---------------- ",
// );

// Testing Code ends

let matches = filterItems("water");

matches.forEach((match) => console.log(match + " "));

/*
Task 3: Render the List in the Browser
Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.
bonus -> Utilize the search item function with a button 
*/

let itemInputField = document.getElementById("itemInput");
let addItemBtn = document.getElementById("addItemButton");
let removeItemBtn = document.getElementById("removeItemButton");
let searchItemBtn = document.getElementById("searchItemButton");
let cartField = document.getElementById("cart");
let searchResults = [];

// choosing to draw one list item at a time when added or removed instead of redrawing the entire list every time

function displayListOnUI(e) {
  if (e.currentTarget === addItemBtn) {
    let listItem = document.createElement("li");
    // let itemToAdd = shoppingList.pop();
    let itemToAdd = shoppingList.at(-1);
    listItem.innerText = itemToAdd;
    cartField.appendChild(listItem);
  } else if (e.currentTarget === removeItemBtn) {
    let lastListItem = cartField.lastElementChild;
    if (lastListItem) {
      cartField.removeChild(lastListItem);
    }
  } else if (e.currentTarget === searchItemBtn) {
    cartField.innerHTML = "";
    searchResults.forEach((result) => {
      let itemFound = document.createElement("li");
      itemFound.innerText = result;
      cartField.appendChild(itemFound);
    });
  }
}

addItemBtn.addEventListener("click", function (e) {
  let userInput = itemInputField.value;
  addItem(userInput);
  itemInputField.value = "";
  displayListOnUI(e);
});

removeItemBtn.addEventListener("click", function (e) {
  removeLastItem();
  displayListOnUI(e);
});

// bonus -> Utilize the search item function with a button

searchItemBtn.addEventListener("click", function (e) {
  let userInput = itemInputField.value;
  searchResults = filterItems(userInput);
  displayListOnUI(e);
});
