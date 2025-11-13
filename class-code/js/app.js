const submitButtonElement = document.querySelector('#submit-button')

const todoInputElement = document.querySelector('#todo-input')

const todoListElement = document.querySelector('#todo-list')

function addTwoDoItem(){
    console.log(todoInputElement.value)
    console.log('to do item added')
    const newTodoElement = document.createElement('li')
    newTodoElement.textContent = todoInputElement.value
    console.log(newTodoElement)

    todoListElement.appendChild(newTodoElement)


}

// 1. create a new li element
// 2. put the text inside of the element that is what the user typed
// 3. add the element to the page

// addEventListener('eventType', function that runs)
submitButtonElement.addEventListener('click',addTwoDoItem)



// Exercise 1:
// Create a + button and a - button
// Under the buttons add a <p> tag that contains the number 0
// When the user clicks on the + the number should go up
// When the user clicks on the - the number should go down
// BONUS: the number should not go below 0

const plusButtonElement = document.querySelector('#plus-button')
const minusButtonElement = document.querySelector('#minus-button')
const resultElement = document.querySelector('#result')





// function increaseNumber(){
 
//     resultElement.textContent = Number(resultElement.textContent) + 1
// }

// function decreaseNumber(){
//     resultElement.textContent = 
//     Number(resultElement.textContent) - 1
// }


function increaseDecrease(event){
    console.log(event.target.id)
    if(event.target.id === 'plus-button'){
        resultElement.textContent = Number(resultElement.textContent) + 1
    }
    else if(event.target.id === 'minus-button' && Number(resultElement.textContent)>0){
         resultElement.textContent = Number(resultElement.textContent) - 1
    }
}


plusButtonElement.addEventListener('click',increaseDecrease)
minusButtonElement.addEventListener('click',increaseDecrease)


