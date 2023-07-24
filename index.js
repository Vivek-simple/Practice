//byId
// let header=document.getElementById("header-title")
// header.textContent="vivek"

// document.getElementById("header-title").style.border="2px solid red" 


// by className
// let listGroup=document.getElementsByClassName("list-group-item")
// console.log(listGroup[2].textContent="vivek")

//by qyueryselector

// let qs=document.querySelector(".list-group-item")
// console.log(qs)
// let qs=document.querySelectorAll(".list-group-item")
// console.log(qs)

//Event handling
// let button=document.getElementById("btn")
// button.addEventListener("click", function(){
//     document.body.style.backgroundColor="red"
// })

// let uli=document.getElementById("items")

//  uli.addEventListener("mousemove",function(e){
//  //document.body.style.backgroundColor='rgb(${e.clientX},{e.clientY},0)'
// //console.log(e.clientX,e.clientY)
// document.getElementById("main").style.backgroundColor=" red" 

// })

let form=document.getElementById("addForm")
let ul=document.getElementById("items")
let item1=document.getElementById("item")
let filter=document.getElementById("filter")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let item=item1.value
   
let li=document.createElement("li")
let btn=document.createElement("button")
btn.innerText="X"
btn.className="btn btn-danger btn-sm float-right delete"
li.appendChild(document.createTextNode(item))
li.appendChild(btn)
li.className="list-group-item"
ul.appendChild(li)
document.getElementById("item").value="" 
})

ul.addEventListener("click",function(e){

if(e.target.classList.contains("delete")) {
   if(confirm("are you sure want to delete")){
    //console.log(e.target.parentElement)
ul.removeChild(e.target.parentElement)
   }
}

})

filter.addEventListener("input",function(e){

    let li=document.querySelectorAll("li")
 Array.from(li).forEach((item)=>{

    if(item.firstChild.textContent.indexOf(e.target.value)!=-1){

      item.style.display="block"
    }
    else{
      item.style.display="none"
    }
 })
    
})
