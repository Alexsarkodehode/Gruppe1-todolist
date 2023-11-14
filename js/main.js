let todo = document.querySelector("#todo");
let button = document.querySelector("#add");
let input = document.querySelector("#input");
//create a todo array helps to add and delete from storage easily
let todoList = [];

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
}
