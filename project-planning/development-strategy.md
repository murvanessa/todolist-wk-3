# JavaScript Todo List using Classes

...

---

## User Story Dependencies

[Story Dependency Diagram](https://excalidraw.com/)

---

## WIREFRAME

![wireframe]()

---

## 0.Setup

---

## 1. User story : Initialize Application

__As a user I want to see the initial page when I load the site__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `Initialize Application`.
- This branch is merged to `master` branch after completion.

### Task A

### Task B

### Task ...

---

## 2. User story : Create TodoList Container 

__As a user I should be able to add a title(s) for my todo list(s)__

__Assigned to Sayed Kazimi__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `TodoList-container`.
- This branch is merged to `master` branch after completion.
### Task A: CSS
```css
#list-name-input {
	padding: 0.7em;
	font-size: 1em;
	font-weight: bold;
}
input[name="inputItems"] {
	padding: 0.5em;
	font-size: 0.8em;
}
/*
    todo list container
*/
div#lists {
	display: grid;
	grid-template-columns: auto auto auto;
	align-content: center;
	justify-content: space-around;
}
/*
    media query for todo list container
 */
@media (max-width: 610px) and (min-width: 100px) {
	div#lists {
		display: grid;
		grid-template-columns: auto;
		align-content: center;
		justify-content: space-around;
	}
}
@media (max-width: 810px) and (min-width: 610px) {
	div#lists {
		display: grid;
		grid-template-columns: auto auto;
		align-content: center;
		justify-content: space-around;
	}
}
/*
    end media query for todo list container
 */

#list-box {
	position: relative;
	z-index: 9;
	top: 60px;
	width: 280px;
	color: white;
	box-sizing: border-box;
	background: rgb(243, 7, 192);
	border-radius: 1em;
	padding: 1rem;
	margin: 1rem;
}

#list-box button {
	outline: none;
	background: rgb(199, 20, 154);
	border-radius: 1em;
	border: 1px solid #b33092;
	color: #fff;
	font-weight: bold;
	padding: 0.7em;
	transition: 0.13s ease-in-out;
	cursor: pointer;
	text-align: center;
}

```

### Task B: HTML

placeholder="Add Title for Todo List" 

### Task C: JavaScript
```js

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
		
		listBox.appendChild(todoTitle);
		listBox.appendChild(inputItems);
		listBox.appendChild(addItems);

		return listBox;
	}
}
```

### Task D: Development Strategy

- Wrote what I did in this branch(part of the project)

### Task E: Issues

- Created an issue for this user story

### Tast F: PR

- Create a PR and assigned reviewers **Razvan, Yulia**

---
## 3. User story :  Add tasks in the list 

__As a user I should be able to see a text box and add button so that I can be able to add the tasks for any todo list of choice__

__Assigned to Razvan__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `add-task`.
- This branch is merged to `master` branch after completion.

### Task A

### Task B

### Task ...

---
## 4. User story :  MARK/UNMARK -  add check box to update the task 

__As a user I should be able to see the added items in todo list__

__Assigned to Anna__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `mark-unmark`.
- This branch is merged to `master` branch after completion.

### Task A

### Task B

### Task ...

---

## 5. User story :  DELETE task

__As a user I should be able to delete the tasks that I want__

__Assigned to Yulia__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `delete-task`.
- This branch is merged to `master` branch after completion.

### Task A

### Task B

### Task ...

---



## 6. Finishing Touches

- Validate code to check for any last mistakes

__Assigned to Sayed__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `final-touch`.
- This branch is merged to `master` branch after completion.

### Task A

### Task B

### Task ...

---
