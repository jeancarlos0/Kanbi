const btnTheme = document.getElementById('themeSwitch');
const btnAddTask = document.querySelector('.create-task-form .btnAddTask');
const prioritySelector = document.querySelector('.create-task-form .priority-form');
const modal = document.querySelector('.create-task-modal');
//const btnNewTask = document.querySelector('.main-container button');
const btnsNewTask = document.querySelectorAll('.main-container .newTask');

const btnClose = document.querySelector('.create-task-form .btnClose');

const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');

//Váriavel global que indica qual tema está sendo usado
var isDark = true;
var container;

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

prioritySelector.addEventListener('click', (event) =>{
    console.log(event.target);
    const priotityType = event.target;

    

    //priotityType.classList.toggle('selected');
});

btnsNewTask.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        container = event.target.parentNode.parentNode;
        addNewTask();
    });
})

/*
btnNewTask.addEventListener('click', ()=>{
    modal.classList.add('show');
});
*/
btnClose.addEventListener('click', ()=>{
    modal.classList.remove('show');
})

btnAddTask.addEventListener('click', createTask);


function createTask(){
    var title = taskTitle.value;
    var desc = taskDescription.value;
    console.log(container);
    const task = `<div class="card" draggable="true"><div class="card-header"><h3>${title}</h3><span class="priority"></span>
    </div><p>${desc}</p></div>`;



    container.insertAdjacentHTML("beforeEnd",task); 

}

function addNewTask(container){
    modal.classList.add('show');
    
    
    //console.log(event.target.parentNode.parentNode);
    //console.log(event.target);
    //const container = event.target.parentNode.parentNode;
    
    console.log(container);
    //const task = `<div class="card" draggable="true"><div class="card-header"><h3>${title}</h3><span class="priority"></span>
    //</div><p>${desc}</p></div>`;


   // createTask(container, title, desc);
    //container.insertAdjacentHTML("beforeEnd",task); 

    //updateTheme();
}


