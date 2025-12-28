let tasks =[];
function setup(){

    //read data from local storage  
    const retrivedData = localStorage.getItem("task_scheduler");
    if (retrivedData != null){
        tasks = JSON.parse(retrivedData);
    }
    //refresh taks container
    refreshTaskContainer();
    //add form event submit
    const form = document.getElementById("form");
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priority");
    const dateInput = document.getElementById("date");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const taskName = taskInput.value;
        const priority = priorityInput.value;
        const date = dateInput.value;
        const task = {
            taskName: taskName,
            priority: priority,
            date:date,
            isDone: false
        }
        //saving data to array
        tasks.push(task);
        //saving data to local storage
        localStorage.setItem("task_scheduler",  JSON.stringify(tasks));
        //refresh task container
        refreshTaskContainer();
    })
}
function refreshTaskContainer(){
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i=0; i<tasks.length; i++){
        const task = tasks[i];
        const taskName = task.taskName;
        const priority = task.priority;
        const date = task.date;
        const div = document.createElement("div");
        div.classList = "task";
        const pName = document.createElement("p");
        pName.textContent = taskName;
        const  pPriority = document.createElement("p");
        pPriority.textContent = "Priority: "+priority;
        const pDate = document.createElement("p");
        pDate.textContent = "Deadline: "+date;
        const button = document.createElement("button");
        if(task.isDone == true){
            button.textContent = "Done";
            button.classList = "done";
        }
        else{
           button.textContent = "Mark Done";
        }

        //add event for button "mark Done"
        button.id = i;
        button.addEventListener("click",()=> {
            const id = button.id;
            tasks[id].isDone = true;
            button.textContent = "Done";
            button.classList = "done";
            //saving data to local storage
            localStorage.setItem("task_scheduler",  JSON.stringify(tasks));
        })

        div.appendChild(pName);
        div.appendChild(pPriority);
        div.appendChild(pDate);
        div.appendChild(button);
        container.appendChild(div);



        
    }
}



window.onload = setup;