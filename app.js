const theForm = document.querySelector('.add')
const addToList = document.querySelector('.todos')
const searchInput = document.querySelector('.search input')
// ADD TODO TO LIST

const list = (toDo) => {
    const addHtml = 
    `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `
    addToList.innerHTML += addHtml
}

theForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const toDo = theForm.add.value.trim()
    if(toDo.length) {
        list(toDo)
        theForm.reset()  
    }
})

// REMOVE TODO FROM LIST 

addToList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

// SEARCH TODO

const filterTodos = (term) => {
    Array.from(addToList.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'))
    
    Array.from(addToList.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))    
}

searchInput.addEventListener('keyup', () => {
    const term = searchInput.value.trim()
    filterTodos(term)
})