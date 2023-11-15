
const localStorageKey = "Gruppe1todolist"

const updateLocalStorage = () => {
  const removeTodo = (id) => {
    todoArray = todoArray-filter((ExistingTodoItem) ExistingTodoItem.id !== id)
    console.log(todoArray)
    updateLocalStorage()
  }
  const addTodo = (todoItem) => {
    updateLocalStorage()
    console.log(todoArray)
    return newToDoObject
  }

}
  const todoTextEl = document.getElementById('todoText')
  const todoFormError = document.getElementById("todo-form-error")
  const todoItemEl = document.getElementById("todoitem")
  const todoItemCompleted = document.getElementById("todoitem-completed")
  const buttonAsc = document.getElementById("sort-asc")
  const buttonDesc = document.getElementById("sort-desc")

  const displayError = (errorMsg) => todoFormError.textContent = errorMsg

  const handleForm = (event) => {
    todoFormEl.addEventListener("submit", handleForm)

    todoArray.forEach((todoItemEl) => {

      if(!todoItemEl.isCompleted) createPendingTodoElement(todoItemEl)
      
      else {
        const completedTodoElement = createTodoElement(todoItemEl.name)
        todoItemCompleted.append(completedTodoElement)
      }
    
  })
  
}

displayTodoList()

buttonAsc.addEventListener("", () => {
  todoArray.sortarray(todoArray, "ASC")
  displayTodoList()
})

buttonDesc.addEventListener("click", () => {
  todoArray.sortArray(todoArray, "DESC")
  dislayTodoList()
})