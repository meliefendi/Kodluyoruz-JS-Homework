const input = document.querySelector(".form-control");
const buton = document.querySelector(".btn");

buton.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = input.value;
    if (inputValue.trim() != 0) {
        
        let taskList = JSON.parse(localStorage.getItem("tasks"))
       
        if (taskList === null) {
            taskList = []
        }
        taskList.push({
            name: inputValue,
            isStrike: false
        })
        // console.log(e)
        localStorage.setItem("tasks", JSON.stringify(taskList));
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
     <li id="${index}_task" onClick ="toggle(${index})" class="list-li mt-2 `+ (data.isStrike ? 'strike' : '') +`" >${data?.name} &nbsp;  </li> 
     <button class="deleteTask btn btn-danger" onClick="deleteItem(${index})"> <i class="far fa-trash-alt"></i></button>
        `
    })
    itemDisplay.innerHTML = html;
   
}
displayItem();

function toggle(myindex) {
    let taskList = JSON.parse(localStorage.getItem("tasks"));

    let myCopyRefList = [...taskList]
    myCopyRefList.map(function(element,index) {
        if(myindex == index)
            if(element?.isStrike){
                element.isStrike = false 
            }else{
                element.isStrike = true 
            }
    });
    localStorage.setItem("tasks",JSON.stringify(myCopyRefList));
    displayItem();
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



