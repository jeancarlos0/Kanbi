const body = document.querySelector('body');
const containers = document.querySelectorAll('.tasks-container');
const tasks = document.querySelectorAll('.card');
const btnTheme = document.getElementById('themeSwitch');
const icon = document.getElementById('themeIcon')
const btnAddTask = document.querySelector('.create-task-form input');
const prioritySelector = document.querySelector('.create-task-form .priority-form');
const modal = document.querySelector('.create-task-modal');
const btnNewTask = document.querySelector('.main-container button');

//Váriavel global que indica qual tema está sendo usado
var isDark = true;

btnTheme.addEventListener('click', function(){
    
    if(isDark){
        body.style.backgroundColor = '#203541';
        containers.forEach(container => {
            container.style.backgroundColor = '#1A2C36';
            icon.src = 'icons/sun.svg'
        });
    }else{
        body.style.backgroundColor = '#FFFFFF';
        containers.forEach(container => {
            container.style.backgroundColor = '#F6F6F6';
            icon.src = 'icons/moon.svg'
        });
    }
    

    tasks.forEach(task =>{
        task.classList.toggle('dark-card');
    });

    isDark = !isDark;
});

prioritySelector.addEventListener('click', (event) =>{
    console.log(event.target);
    event.target.style.borderColor = 'black'
});

btnNewTask.addEventListener('click', ()=>{
    modal.classList.add('show');
});



//

