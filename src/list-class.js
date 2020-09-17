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
		addItems.addEventListener("click", this.printState.bind(this));
		listBox.appendChild(todoTitle);
		listBox.appendChild(inputItems);
		listBox.appendChild(addItems);

		return listBox;
	}
}
