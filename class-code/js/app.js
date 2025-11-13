const submitButtonElement = document.querySelector('#submit-button')

const todoInputElement = document.querySelector('#todo-input')

console.log(todoInputElement)

function addTwoDoItem(){
    console.log('to do item added')
}

// addEventListener('eventType', function that runs)
submitButtonElement.addEventListener('click',addTwoDoItem)