let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem(todoList)) : [];
console.log(todoList)
window.onload = function(){
    drawTodoList(document.getElementsByTagName('todo-list')[0], todoList);
}

function addTodo(){
    const todo = document.getElementById('search-input').value;
    
    if(todo.replace(/ /g,"") === '')
        return;
    todoList.push({
        title : todo,
        date : new Date()
    })

    document.getElementById('search-input').value = '';
    localStorage.setItem('todoList', JSON.stringify(todoList))

    drawTodoList(document.getElementsByClassName('todo-list')[0], todoList);
}

function drawTodoList(parent, list){
    $(parent).empty();

    for(let unit of list){
        const toDoLi = document.createElement('li');
        toDoLi.isDone = false;
        toDoLi.innerHTML = unit.title;
    }
}