let todo = document.querySelector("#todo");
let button = document.querySelector("#add");
let input = document.querySelector("#input");

//create a todoList array helps to add and delete from storage easily
let todoList = [];
window.onload = () => {
  todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  todoList.forEach((list) => addlist(list));
};

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
  localStorage.setItem("todoList", JSON.stringify(todoList));
  para.addEventListener("click", () => {
    todo.removeChild(para);
    remove(list);
  }); // Removed as dblclick is not good for user friendliness /changes made by Leah after talking with emil. additional notes change from click entirely as click doesnt tell you it deletes use a button or a check box instead//
  function remove(list) {
    let index = todoList.indexOf(list);
    if (index > -1) {
      todoList.splice(index, 1);
    }

    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
}
