//Define UI vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//load all event listeners
loadEventListeners()

function loadEventListeners(){
  //DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks)

  //Add Task Event
  form.addEventListener('submit', addTask)

  //Remove task event
  taskList.addEventListener('click', removeTask)

  //clear  task event(Not working, clear button has been decleared directly at the buttom)
  // clearBtn.addEventListener('click', onclick)

  // Filter
  filter.addEventListener('keyup', filterTasks)



}

//Get Tasks from LS
function getTasks(){
  let tasks
  if( localStorage.getItem('tasks') === null){
    tasks = []
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(tasks){ 

    //creating li element

   const li = document.createElement('li')
   //Add class
   li.className ='collection-item'
   //create text node and append to li
   li.appendChild(document.createTextNode(task))
  //create new link element
  const link = document.createElement('a')
  //add class
  link.className = 'delete-item secondary-content'
  //add icon html
  link.innerHTML = '<li class="fa fa-remove"></i>'
  //append the link to li
  li.appendChild(link)

  //Append li to ul

taskList.appendChild(li)
  })



}

//Add Task

function addTask(e){
  if(taskInput.value === '') {
     alert('Add a task')
  }
   //creating li element

   const li = document.createElement('li')
   //Add class
   li.className ='collection-item'
   //create text node and append to li
   li.appendChild(document.createTextNode(taskInput.value))
  //create new link element
  const link = document.createElement('a')
  //add class
  link.className = 'delete-item secondary-content'
  //add icon html
  link.innerHTML = '<li class="fa fa-remove"></i>'
  //append the link to li
  li.appendChild(link)

  //Append li to ul

taskList.appendChild(li)
  
//clear input
taskInput.value =''

  e.preventDefault()
}


//store Task
function storeTaskInLocalStorage(task) {
  let tasks
  if( localStorage.getItem('tasks') === null){
    tasks = []
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))

}

//Remove Task
function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove()

    //Remove from LS
    function removeTaskFromLocalStorage (taskItem){
      
    }
  }
  }
}

// clear Task
document.querySelector('.clear-tasks').addEventListener('click', onclick)

// function onclick(){
//   while(taskList.firstChild){
//     taskList.removeChild(taskList.firstChild)
//   }
// }

function onclick(){
  if(confirm('Wonna clear all?'))
    {taskList.innerHTML =''}
  
}


// filter Task
function filterTasks(e){
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach
  (function (task){
    const item = task.firstChild.textContent
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block'
    }
    else{
      task.style.display = 'none'
    }

  })
}


 