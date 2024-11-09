const item = document.querySelector(".i")
const topp = document.querySelector(".uu")
const cut = document.querySelector("i")

item.addEventListener("keyup",(e)=>{
if (e.key == "Enter"){
    addtodo(item.value)
    item.value = ""
}
})

const addtodo = (itemValue)=>{
const listitem = document.createElement("li");
listitem.innerHTML = `
${itemValue}
 <i class="fa-regular fa-circle-xmark"></i>
`;


listitem.querySelector("i").addEventListener("click",()=>{
    listitem.remove();
})
listitem.addEventListener("click",()=>{
    listitem.classList.toggle("done")
})

topp.appendChild(listitem);


}