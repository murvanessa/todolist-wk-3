"use strict";

import { logger } from "../lib/logger.js";

// This list class is here for example.
//  delete it!  your project does not need to be a list

export class List {
	state = {
		name: "",
	};

	constructor(name) {
		this.state.name = name;
	}

	printState() {
		console.log(this.state.name);

		logger.push({
			action: `click button`,
			name: this.state.name,
		});
	}
	addItems() {
		console.log(this.state.name);

		logger.push({
			action: `click button`,
			name: this.state.name,
		});
	}

	render() {
		let listBox = document.createElement("div");
		listBox.id = "list-box";
		let todoTitle = document.createElement("h2");
		todoTitle.textContent = this.state.name;
		let inputItems = document.createElement("input");
		inputItems.type = "text";
		inputItems.name = "inputItems";
		inputItems.placeholder = "Enter Tasks To Do";

		const addItems = document.createElement("button");
		addItems.textContent = "Add";
		//addItems.addEventListener("click", this.printState.bind(this));
		addItems.addEventListener("click", this.addItems.bind(this));
		listBox.appendChild(todoTitle);
		listBox.appendChild(inputItems);
		listBox.appendChild(addItems);
		

		return listBox;
	}

	
	
	// Function addItems
	addItems  () {
		debugger;
	
		let inputID = `${this.state.name}HaveTodo`;
		let itemValue = document.getElementById(inputID).value;
	
		if (itemValue === "") {
		  alert("Enter something to add in your Todo List!");
		  return;
		}
	
		this.state.allTodo.push({
		  items: itemValue,
		  completed: false,
		});
		this.displayItems();
		document.getElementById(inputID).value = "";
		logger.push({
		  action: "Add Items to the list",
		  stateName: this.state.name,
		  state: this.state,
		});
	  }
	
	  displayItems () {
		debugger;
	
		let itemLists = document.getElementById(`${this.state.name}ol`);
		itemLists.innerHTML = "";
	
		this.state.allTodo.forEach(function (todo, position) {
		  let todoItems = document.createElement("li");
		  todoItems.id = position;
		  checkItem = document.createElement('input'); 
		  checkItem.type = "checkbox";
		  
		  checkItem.className = "checkItem";
		
		  checkItem.addEventListener("click", this.toggleComplete.bind(this, todo));
	
		  if(todo.completed === true){
			checkItem.checked = true;
		  } else { checkItem.checked = false;}
	
		  let spanEl = document.createElement('span');
		  spanEl.innerHTML = todo.items;
		  todoItems.appendChild(checkItem);
		  todoItems.appendChild(spanEl);
	
		  //delete button
		  var deleteButton = document.createElement("button");
		  deleteButton.innerHTML = `<i class="fa fa-trash-o" style= "font-size:1.7em;color:red; font-weight: bold;"></i>`;
		  deleteButton.style.color = "red";
	
		  deleteButton.style.fontWeight = "bold";
		  
		  deleteButton.className = "deleteItemList";
	
		  todoItems.appendChild(deleteButton);
		  deleteButton.addEventListener(
			"click",
			this.deleteItems.bind(this, position)
		  );
	
	
		  itemLists.appendChild(todoItems);
		}, this);
	  }
}
