const submitButtonElement = document.querySelector('#submit-button')

const todoInputElement = document.querySelector('#todo-input')

const todoListElement = document.querySelector('#todo-list')

function addTwoDoItem(){
    console.log(todoInputElement.value)
    console.log('to do item added')
    const newTodoElement = document.createElement('li')
    newTodoElement.textContent = todoInputElement.value
    console.log(newTodoElement)


}

// 1. create a new li element
// 2. put the text inside of the element that is what the user typed
// 3. add the element to the page

// addEventListener('eventType', function that runs)
submitButtonElement.addEventListener('click',addTwoDoItem)

