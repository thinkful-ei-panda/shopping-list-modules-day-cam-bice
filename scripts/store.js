import item from './item.js';

const items= [],
  hideCheckedItems = false;

function findById(itemId) {
  const item = items.find( i => i.id === itemId);
  return item;
}

function addItem(name) {
  try {
    item.validateName(name);
    const newItem = item.create(name);
    items.push(newItem);
  } catch (error) {
    console.log(`Cannot add item: ${error.message}` );
  }
}

function findAndToggleChecked(id) {
  const foundItem = findById(id);
  console.log (foundItem.checked);
  foundItem.checked = !foundItem.checked;
  console.log (foundItem.checked);
}

function findAndUpdateName(id,newName) {
  try {
    item.validateName(newName);
    const found = this.findById(id);
    found.name = newName;
  } catch(error) {
    throw new TypeError(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(itemId) {
  const filteredArray = this.items.filter(item => item.id !== itemId);
  this.items = filteredArray;
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default{
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};