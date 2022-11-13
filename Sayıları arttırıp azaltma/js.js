let counter = 0;

let domCounter = document.getElementById("counter")

let domCrease = document.getElementById("increase")
let domDegrease = document.getElementById("decrease")

domCounter.innerHTML = 0

domCrease.addEventListener("click",clickEvent)
domDegrease.addEventListener("click",clickEvent)

// function clickEvent(){
//     console.log(this.id)
//     if(this.id == "increase"){
//       domCounter.innerHTML = counter += 1
//     }else {
//         domCounter.innerHTML = counter -= 1
//     }
// }

// function clickEvent(){
//     console.log(this.id)
//     this.id == "increase"? domCounter.innerHTML = counter += 1 :
//         domCounter.innerHTML = counter -= 1
    
// }

function clickEvent (){
    this.id == "increase" ? counter += 1 : counter -= 1; domCounter.innerHTML = counter
}


domİncrease.addEventListener("click",function(){
    domCounter.innerHTML = counter += 1
});

domDecrease.addEventListener("click",function(){
    domCounter.innerHTML = counter -= 1
})
