const addForm = document.querySelector ('.add')
const list = document.querySelector ('.todos')//ul class


// GENERATE TODO LIST

const generateTodoList = (todo) => {

    const html =`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html
}

addForm.addEventListener ('submit', e =>{

    e.preventDefault();

    const todo = addForm.adding.value.trim(); //Trip removes empty spaces before and after

    //make sure empty field cannot be added to the list like this:
     if (todo.length){
    generateTodoList (todo)
    addForm.reset () //makes sure input field is cleared from what ever you previously typed
  }
 

});

//DELETE ITEM ON THE LIST
//attach delete event to ul and check if trash button is clicked

list.addEventListener ('click', e => {
    
if (e.target.classList.contains('delete')){ //check if target element when you click it contains 'delete' class 
    e.target.parentElement.remove()  //get parent element (li) and remove it 
    
    }
})

//SEARCH FIELD with FILTER
//add eventListener to input (keyup) ,not form then filter 

const filterTodos = (term) => {
    Array.from (list.children)//ARRAY OF TODOS-turn list into array so that you can use filter method
        .filter((todo)=>!todo.textContent.toLowerCase().includes(term)) //make sure it takes lower and upercase
        .forEach((todo)=> todo.classList.add ('filtered'));

    Array.from (list.children)
        .filter((todo)=>todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> todo.classList.remove ('filtered'))     
      
}

const search= document.querySelector ('.search input')

search.addEventListener ('keyup', ()=>{
  const term = search.value.trim().toLowerCase(); 
  filterTodos(term)   
});

//

