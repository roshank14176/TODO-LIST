let todoList=
[{
    item:'Buy milk',
    dueDate:'12/2/2022'
},
{
    item:'go to college',
    dueDate:'12/2/2022'
}];
displayItem();
function addTodo(){
    let todoElement=document.querySelector('#todo_input');
       let dateElement=document.querySelector('#todo_date');
    let todoItem= todoElement.value;
    let todoDate= dateElement.value;
    todoList.push({item : todoItem, dueDate : todoDate});
    todoElement.value ='';
    dateElement.value ='';
    displayItem();
}
function displayItem(){
    let containerElement= document.querySelector('.todo_container');
    let newHtml='';
    
    for(let i =0; i<todoList.length; i++){
        // let item =todoList[i].item;
        // let dueDate =todoList[i].dueDate;
        let{item , dueDate}=todoList[i];
        newHtml += `     
        <span> ${item} </span>
    <span>${dueDate}</span>
  <button class="btn_delete" onclick="todoList.splice(${i},1); displayItem();" > Delete</button>
   
        
        `;
  
       
    }
    containerElement.innerHTML=newHtml;
    
}