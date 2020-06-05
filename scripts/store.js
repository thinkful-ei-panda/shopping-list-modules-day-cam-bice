import item from './item.js';

const items= [],
  hideCheckedItems = false;

function findById(id) {
  item = items.find(id);
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
  const foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
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

export default{
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};