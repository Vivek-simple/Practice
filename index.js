let inputBox=document.querySelector('#item')
let submit=document.querySelector('#submit')
let items=document.querySelector('#items')
let match=document.querySelector('#filter')
let isEditable=false

inputBox.addEventListener('input',(e)=>{
    
})

match.addEventListener('input',find)

items.addEventListener('click',function(e){
  if(e.target.textContent==='X')
    Delete(e)
   else if(e.target.textContent==='Edit'){
    let list=e.target.parentElement
    Edit(list)
   }
   
})

submit.addEventListener('click',function(e){
    e.preventDefault()
    add()
    
})

function add(){
    
    if(!isEditable){
    let li=document.createElement('li')
    let btn1=document.createElement('button')
    let btn2=document.createElement('button')
    li.classList.add("list-group-item")
    btn1.classList.add('btn',"btn-danger","btn-sm","float-right","delete",'ml-4')
    btn2.classList.add('btn',"btn-secondary","btn-sm","float-right",)
    li.innerHTML=inputBox.value
    btn1.innerHTML='X'
    btn2.innerHTML='Edit'
    li.appendChild(btn1)
    li.appendChild(btn2)
    items.appendChild(li)
   
    }

    else{
        let li=document.querySelectorAll('li')
        Array.from(li).forEach(function(item){
            if(item.classList.contains('update')){
                item.childNodes[0].textContent=inputBox.value
                item.classList.remove('update')
            }
             
        })
        isEditable=false
    }
    inputBox.value=''
}

function Delete(e){
    items.removeChild(e.target.parentElement)    
}

function Edit(list){
 inputBox.value=list.childNodes[0].textContent
 isEditable=true
 list.classList.add('update')
}

function find(e){
    let li=document.querySelectorAll('li')
    let text=e.target.value.toLowerCase()
    Array.from(li).forEach(function(item){
        var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text)!= -1){
			item.style.display = 'block';
		}
		else
		{
			item.style.display = 'none';
		}  
    })
}





