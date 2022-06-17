const todoBtn = document.querySelector("#todoBtn"); 
const todo = document.querySelector(".todo");
const frmTodo = document.querySelector("#frm-todo");
const todoUl = todo.querySelector("ul");
const LOCAL_STORAGE_TODOS_KEY = "Todos"
// const delSpan = todo.querySelector(".todo span");
const todoWriter = ()=>{
    if(todo.classList.contains("hidden")){
        todo.classList.remove("hidden");    
    }else  todo.classList.add("hidden");    
    
}
const onSubmitTodo= (e)=>{
    e.preventDefault();
    const todoValue = frmTodo.querySelector("input");
    
    const todoObj =  {
        id : Date.now(),
        todo : todoValue.value
    }
    
    let todos = getTodos(); 

    if(todos){
        todos.push(todoObj );
        setTodos(todos);
    }else {
        setTodos([todoObj]);
    }

    todos = getTodos(); 
    printTodoList(todos);

    todoValue.value = "";
}
const setTodos = (todo)=>{
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todo));
}
const getTodos = ()=>{ 
    const localStorageTodos =JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY));
    return localStorageTodos;
}
const printTodoList = (todos)=>{
    clearTodoList();
    todos.forEach((item)=>{
        const li = document.createElement("li");
        li.id = item.id ; 
        li.innerHTML = item.todo;
        const span = document.createElement("span");
        span.classList.add("btn");
        span.innerText = " x "; 
        span.addEventListener("click",onSubmitDelTodo);
        li.append(span);
        todoUl.append(li);
    })
}
const clearTodoList = ()=>{
    while(todoUl.hasChildNodes()){
        todoUl.removeChild(todoUl.firstChild);
    }
}
const onSubmitDelTodo =(e)=>{
    const li = e.target.parentElement;
    li.remove();
    let todos = getTodos(); 
    todos = todos.filter((todo)=>todo.id !== parseInt(li.id));
    setTodos(todos);
}
const hasTodo = getTodos(); 
if(hasTodo){
    printTodoList(hasTodo);
}
todoBtn.addEventListener("click",todoWriter);

frmTodo.addEventListener("submit", onSubmitTodo);


