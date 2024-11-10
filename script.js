const loadTodosFromStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.forEach((todo) => addTodo(todo));
}

const item = document.querySelector(".i")
const topp = document.querySelector(".uu")
const cut = document.querySelector("i")

document.addEventListener("DOMContentLoaded",loadTodosFromStorage);

item.addEventListener("keyup",(e)=>{
if (e.key == "Enter"){
    addTodo(item.value)
    item.value = ""
}
})

const addTodo = (itemValue)=>{
const listitem = document.createElement("li");
listitem.innerHTML = `
${itemValue}
 <i class="fa-regular fa-circle-xmark"></i>
`;
const upadateTodosInStorage = ()=>{
    const todos = [];
    for (let li of topp.children){
        todos.push(li.innerText)
    }
localStorage.setItem("todos", JSON.stringify(todos));

}

listitem.querySelector("i").addEventListener("click",()=>{
    listitem.remove();
    upadateTodosInStorage();
});
topp.appendChild(listitem);
upadateTodosInStorage();




listitem.addEventListener("click",()=>{
    listitem.classList.toggle("done")
})


topp.appendChild(listitem);

};
