const body = document.querySelector('body');
const containers = document.querySelectorAll('.tasks-container');
const tasks = document.querySelectorAll('.card');
const btnTheme = document.getElementById('themeSwitch');
const icon = document.getElementById('themeIcon')

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



//

