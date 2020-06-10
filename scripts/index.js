const btnTheme = document.getElementById('themeSwitch');
const btnAddTask = document.querySelector('.create-task-form .btnAddTask');
const prioritySelector = document.querySelector('.create-task-form .priority-form');
const priorityType = document.getElementsByName('priority');
const modal = document.querySelector('.create-task-modal');
const btnsNewTask = document.querySelectorAll('.main-container .newTask');
const btnClose = document.querySelector('.create-task-form .btnClose');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');

//Váriavel global que indica qual tema está sendo usado
let isDark = true;
let container;

/*
let TaskItem(){
    


    addTask: function(){

    }

}

*/

function updateTheme(){
    
    const body = document.querySelector('body');
    const containers = document.querySelectorAll('.tasks-container');
    const tasks = document.querySelectorAll('.card');
    const icon = document.getElementById('themeIcon')
    const taskDescriptions = document.querySelectorAll('.card p');

    if(isDark){
        body.style.backgroundColor = '#203541';
        containers.forEach(container => {
            container.style.backgroundColor = '#1A2C36';
            icon.src = 'icons/sun.svg'
        });
        taskDescriptions.forEach(description =>{
            description.style.color = '#FFFFFF88';
        });
    }else{
        body.style.backgroundColor = '#FFFFFF';
        containers.forEach(container => {
            container.style.backgroundColor = '#F6F6F6';
            icon.src = 'icons/moon.svg'
        });
        taskDescriptions.forEach(description =>{
            description.style.color = '#00000088';
        });
    }
    

    tasks.forEach(task =>{
        task.classList.toggle('dark-card');
    });

    isDark = !isDark;
}

btnTheme.addEventListener('click', updateTheme);

btnsNewTask.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        container = event.target.parentNode.parentNode;
        addNewTask();
    });
})

btnClose.addEventListener('click', ()=>{
    modal.classList.remove('show');
})

btnAddTask.addEventListener('click', createTask);


function createTask(){
    var title = taskTitle.value;
    var desc = taskDescription.value;
    var prio;
    priorityType.forEach(type =>{
        if(type.checked){
            prio = type.value;
        }
    })

    console.log(container);
    const task = `<div class="card" draggable="true"><div class="card-header"><h3>${title}</h3><span class="priority ${prio}"></span>
    </div><p>${desc}</p></div>`;

    container.insertAdjacentHTML("beforeEnd",task); 

}

function addNewTask(){
    modal.classList.add('show');
}


