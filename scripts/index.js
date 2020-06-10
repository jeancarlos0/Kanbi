const btnTheme = document.getElementById('themeSwitch');
const btnAddTask = document.querySelector('.create-task-form .btnAddTask');
const prioritySelector = document.querySelector('.create-task-form .priority-form');
const priorityType = document.getElementsByName('priority');
const modal = document.querySelector('.create-task-modal');
const btnsNewTask = document.querySelectorAll('.main-container .newTask');
const btnClose = document.querySelector('.create-task-form .btnClose');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');

const dropzones = document.querySelectorAll('.tasks-container');
let cards;

//Váriavel global que indica qual tema está sendo usado para definir o tema
let isDark = true;
let container;


init();

function updateCards(){

    cards = document.querySelectorAll('.card');
    
    cards.forEach((card)=>{
        card.addEventListener('dragstart', dragstart);
        card.addEventListener('drag', drag);
        card.addEventListener('dragend', dragend);
    });
}

function dragstart(){
    
    dropzones.forEach(dropzone=>{
        dropzone.classList.add('highlight');
    })

    //This nesse caso é o cartão que chamou o evento
    this.classList.add('is-dragging')
}

function drag(){
}

function dragend(){
    
    dropzones.forEach(dropzone=>{
        dropzone.classList.remove('highlight');
    })
    this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone =>{
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
})

function dragenter(){
    
}

function dragover(){
    
    this.classList.add('over')

    //pega o cartão que está sendo arrastado
    const cardBeinDragged = document.querySelector('.is-dragging');
    
    this.appendChild(cardBeinDragged);

}

function dragleave(){
    this.classList.remove('over')
}

function drop(){
    this.classList.remove('over')
}


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
    updateCards();

}

function addNewTask(){
    modal.classList.add('show');
}

function init(){
    updateCards();
};


