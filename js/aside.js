const localStorageKey = "Gruppe1todolistproject"
let todoArray = JSON.parse(localStorage.getITem(localStorageKey))
const updateLocalStorage = () =>
localStorage.setITem(localtorageKey, JSON.stringify(todoArray))

const removeTodo = (id) => {
    todoArray = todoArray.filter((existingTodoITem) => existingTodoITem.id !== id)
    console.log(todoArray)
    updateLocalStorage()
}
const addTodo = (todoItem) => {
    const newTodoObject = {
        name: todoItem,
        id: Date.now(),
        isCompleted: false
    }
    todoArray.push(newTodoObject)
    updateLocalStorage()

    console.log(todoArray)
    return newTodoObject
}
const updateTodo = (todoId) => {
    todoArray = todoArray.map((todoItem) => {
        if(todoItem.id === todoId) todoItem.isCompleted = true
        return todoItem
    })
    updateLocalStorage()
}


}
  const todoTextEl = document.getElementById('todoText')
  const todoFormError = document.getElementById("todo-form-error")
  const todoItemEl = document.getElementById("todoitem")
  const todoItemCompleted = document.getElementById("todoitemcompleted")
  const buttonAsc = document.getElementById("sort-asc")
  const buttonDesc = document.getElementById("sort-desc")

  const displayError = (errorMsg) => todoFormError.textContent = errorMsg

  const handleForm = (event) => {
    todoFormEl.addEventListener("submit", handleForm)

    const displayTodoList = () => {
      todoItemEl.innerHTML = ""
      todoItemCompleted.innerHtml = ""

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
  displayTodoList()
})