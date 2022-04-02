create_task_btn = document.getElementById("create_new_btn")
let counter = 0
create_task_btn.addEventListener("click", function(){
    popup = document.getElementById('create_new_task')
    popup.style.display = 'flex'
})
close_task_btn = document.getElementById('close_btn')
close_task_btn.addEventListener('click', function(){
    popup = document.getElementById('create_new_task')
    popup.style.display = 'none'
})
save_task_btn = document.getElementById('save_task')
save_task_btn.addEventListener('click', function(){
    task = document.getElementById('task_entered').value
    time =  document.getElementById('time_entered').value
    let value = 'Task : '+ task + ' ' + 'Deadline : ' + time
    let task_container = document.getElementById('container_task')
    let task_name = counter
    let newDiv = document.createElement('div') 
    let text_content = document.createTextNode(value)
    newDiv.appendChild(text_content)
    task_container.appendChild(newDiv)
})