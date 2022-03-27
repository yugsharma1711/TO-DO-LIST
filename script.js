create_task_btn = document.getElementById("create_new_btn")
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
    document.getElementById('task_list').innerHTML += '<li> ${task} ${time} </li>'
})