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
