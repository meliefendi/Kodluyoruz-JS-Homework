const input = document.querySelector(".form-control");
const buton = document.querySelector(".btn");

buton.addEventListener("click", function () {
    let inputValue = input.value;
    if (inputValue.trim() != 0) {
        
        let taskList = JSON.parse(localStorage.getItem("tasks"))
       
        if (taskList === null) {
            taskList = []
        }
        taskList.push(inputValue)
        localStorage.setItem("tasks", JSON.stringify(taskList))
    }
    
    displayItem()
})

function displayItem(){
    let taskList = JSON.parse(localStorage.getItem("tasks"))
    if(taskList === null){
        taskList = []
    }
    let html = "";
    let itemDisplay = document.querySelector(".list");
    taskList.forEach((data, index) => {
        
        html += `
     <li onClick ="toggle()" class="list-li mt-2">${data} &nbsp;<button class="deleteTask btn btn-danger" onClick="deleteItem(${index})"> <i class="far fa-trash-alt"></i></button>  </li> 
        `
    })
    itemDisplay.innerHTML = html;
}
displayItem()

function toggle() {
    let elements = document.querySelectorAll(".list-li");
    let taskList = JSON.parse(localStorage.getItem("tasks"));
elements.forEach(function(element) {
  element.addEventListener("click", function() {
    
    element.classList.toggle("strike");
    
  });
});
localStorage.setItem("tasks",JSON.stringify(taskList));
displayItem()
}


function deleteItem(index){
    let taskList = JSON.parse(localStorage.getItem("tasks"))
    taskList.splice(index,1)
    localStorage.setItem("tasks",JSON.stringify(taskList));
    displayItem()
}

function clearTask(){
    localStorage.clear()
    displayItem()
}



