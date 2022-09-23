
const todoURL = "http://localhost:3000/todos";

const inputBox = document.querySelector(".todo-input");
const inputButton = document.querySelector(".todo-button");
const inputBar = document.querySelector(".todo-input-div");
const taskDashboard = document.querySelector(".task-dashboard");
const todoItem = document.querySelector(".todo-item");

function handleInput(e){
    inputBox.value = e.target.value;
}

function handleSubmit(e){
    e.preventDefault();

    const todoHeader= {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: inputBox.value , completed : false})
    };

    fetch(todoURL, {
        todoHeader
      }).then(result=>result.json())
      .then(data=>{console.log(data);
})
};

function handleTrash(e){
    e.preventDefault();
    console.log(e.target.value)
    // find the key that matches with this event.target's key
    // delete that key 
    // rerender
}

function handleEdit(e){
    e.preventDefault();
    // turn the html object to a form with text input
    // find the key that matches with this event.target's key 
    // rerender
}

function handleFinishTask(e){
    e.preventDefault();
    // 
}

function handleDelete(e){
    e.preventDefault();
    return  e.target.value == "Trash"?
    fetch(todoURL+`${e.target.key}`, {
        method: 'DELETE',
    }).then(response => response.json()):null;
}


function getTodos(){
    fetch(todoURL)
    .then(result=>result.json())
    .then(data=>{
        const todoData = data.map(todo=>{
            return todo.completed ?
            `<form key=${todo.id} class="todo-item">
            <div class="todo-item-text">${todo.title}
            <div/>
            <input type ="submit" value = "trash">
            </form>`
            :`<form key=${todo.id} class="todo-item">
            <div class="todo-item-text">${todo.title}
            <div/>
            <input type ="submit" value="submit">
            <input type ="submit" value = "trash">
            </form>`
        }).join("");
        taskDashboard.innerHTML = todoData;
// adding eventlisteners to buttons
        inputBox.addEventListener("input", handleInput);
        inputBar.addEventListener("submit", handleSubmit);
        todoItem?todoItem.addEventListener("submit", handleDelete):null;

        todoItem?todoItem.addEventListener("submit", handleFinishTask):null;
        todoItem?todoItem.addEventListener("submit", handleTrash): null;

        todoItem?todoItem.addEventListener("click", handleEdit): null;
    })
    
}



function renderToDo(todos){

};
getTodos()







