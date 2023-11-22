const localStorageKey = "Gruppe1todolistproject"
let todoArray = JSON.parse(localStorage.getIem(localStorageKey))
const updateLocalStorage = () =>
localStorage.setITem(localStorageKey, JSON.stringify(todoArray))

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


  
  const todoItemEl = document.getElementById("todoitem")
  const todoItemCompleted = document.getElementById("todoitemcompleted")
  const buttonAsc = document.getElementById("sort-asc")
  const buttonDesc = document.getElementById("sort-desc")

  const handleForm = (event) => {
    todoFormEl.addEventListener("click", handleForm) 

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


function sortArray(array, sortOrder = "ASC", sortBy = "name") {
  // create a copy of the array to avoid sorting the original array
  const newArray = [...array]
  if (sortOrder === "ASC") sortOrder = 1
  else sortOrder = -1

  newArray.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1 * sortOrder
    else if (a[sortBy] > b[sortBy]) return 1 * sortOrder

    return 0
  })


