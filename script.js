const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete'
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
let count = 0

function countTotalItems(itemCountSpan){
	itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1;
}

function countUncheckItems(uncheckedCountSpan){
	uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1;
}

function selectDeselectCheckBox(checkedItems){
	checkedItems.addEventListener('change', function(){
		if(this.checked)
		{
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1;
		}
		else
		{
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1;
		}
	})
}

function deleteTodoItem(liItem,del){
	del.addEventListener('click',function(){
		
		//decrementing the total count
		itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - 1;		
		
		let checkedBox = document.getElementById("checkbox")
		
		if(checkedBox.checked === false)
		{
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1;
		}
		liItem.remove()
	})
}

function newTodo() {
	const todoText = prompt("Enter the todo-item.")
	
	let todoItem = document.createElement("li")
	todoItem.setAttribute('class',classNames.TODO_ITEM)
	todoItem.setAttribute('id',itemCountSpan.innerHTML)
	
	let todoSpan = document.createElement("span")
	todoSpan.setAttribute('class',classNames.TODO_TEXT)
	
	let check = document.createElement("input")
	check.setAttribute("type","checkbox")
	check.setAttribute('class',classNames.TODO_CHECKBOX)
	check.setAttribute('id',"checkbox")
	
	let deleteButton = document.createElement("button")
	deleteButton.innerHTML = 'Delete this task'
	deleteButton.setAttribute('class',classNames.TODO_DELETE)
	
	if(!todoText)
	{
		alert("Please enter the to-do item!")
		return false
	}
	else
		todoSpan.appendChild(document.createTextNode(todoText))

	list.appendChild(todoItem)
	todoItem.appendChild(check)
	todoItem.appendChild(todoSpan)
	todoItem.appendChild(deleteButton)
	
	//count total number of Todo items
	countTotalItems(itemCountSpan)
	
	//count total number of unchecked todo items
	countUncheckItems(uncheckedCountSpan)
	
	//updating uncheckedItems and totalItemCount if checkbox selected/deselected
	let checkedItems = todoItem.firstChild
	selectDeselectCheckBox(checkedItems) 	
	
	//delete to-do item
	let liItem = list.lastChild
	let del = todoItem.lastChild
	deleteTodoItem(liItem,del)
}