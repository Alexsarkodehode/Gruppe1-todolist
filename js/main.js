let todo = document.querySelector("#todo");
let button = document.querySelector("#add");
let input = document.querySelector("#input");

//local storage
/* const localStorageKey="groupProject"
let todoList=JSON.parse(localStorage.getItem(localStorageKey))  ||  [] */

//create a todo array helps to add and delete from storage easily
let todoList = [];

const updateLocalStorage = () =>
  localStorage.setItem(localStorageKey, JSON.stringify(todoList));

//add eventlistener for button element

button.addEventListener("click", () => {
  todoList.push(input.value);
  addlist(input.value);
  input.value = "";
});

function addlist(list) {
  //creating p elements dynamically
  let para = document.createElement("p");
  para.innerText = list;
  todo.appendChild(para);
  localStorage.setItem("todoList", JSON.stringify);
}
export { todo, button, input, addlist };
