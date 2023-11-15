//////
//////
//////File1

console.log("test");
// get the html elements:
/* const todoFormEl = document.getElementById("todo-form")
const todoTextEl = document.getElementById("todo-text")

const todoFormError = document.getElementById("todo-form-error") */

// displays error message
/* const displayError = (errorMsg) => todoFormError.textContent = errorMsg

// the form event handler function:
const handleForm = (event) => {
  // prevent default behavior (page refresh)
  event.preventDefault()
  // check if input is valid
  if (todoTextEl.value.length < 3) {
    displayError("Please enter 3 or more characters.")
    return
  }
  // clear the error message
  displayError()

  console.log(todoTextEl.value)

  const todoElement = document.createElement("p")
  todoElement.textContent = todoTextEl.value
  todoElement.style = "background-color: #ccc; min-height: 1rem; "

  todoItemsDiv.append(todoElement)

  // finally, clear the input field
  todoTextEl.value = ""
} */

// define form submit callback function
//todoFormEl.addEventListener("submit", handleForm)

//////
//////
//////File2

let todoArray = ["code", "fix errors", "improve code"];
//get the html elements
const todoFormEl = document.getElementById("todo-form");
const todoTextEl = document.getElementById("todo-text");
const todoFormError = document.getElementById("todo-form-error");
const todoItemsDiv = document.getElementById("todos");
const todoElement = document.createElement("p");
//display error massage
const displayError = (errorMsg) => (todoFormError.textContent = errorMsg);
//create elements
const createTodoElement = (todoText) => {
  const removeTodoButton = document.createElement("button");
  removeTodoButton.textContent = "remove";

  todoElement.textContent = todoTextEl.value;
  todoElement.style = "background-color: #ccc; min-height: 1rem; ";
  todoElement.appendChild(removeTodoButton);
  //remove todo handler function
  removeTodoButton.addEventListener("", () => {
    todoElement.remove();
    todoArray = todoArray.filter((todoItem) => todoItem !== todoText);
  });

  todoItemsDiv.append(todoElement);
};

//the form event handler function
const handleForm = () => {
  //prevent default behaviour of refreshing the page
  event.preventDefault();
  //check if input is valid
  if (todoTextEl.value.length < 3) {
    displayError("please enter 3 or more caracteres.");
    //terminate the remainder of this function with return function
    return;
  }
  //clear the error massage
  displayError();

  console.log(todoTextEl.value);

  todoItemsDiv.append(todoElement);
  //create the todo item elment(s)
  createTodoElement(todoTextEl.value);
  //add todo to the todo array
  todoArray.push(todoTextEl.value);
  todoTextEl.value = "";
};

//define form submit callback function
todoFormEl.addEventListener("submit", handleForm);
todoFormEl.addEventListener("submit", handleForm);

//display old todo list
todoArray.forEach((todoItem) => {
  createTodoElement(todoItem);
});
