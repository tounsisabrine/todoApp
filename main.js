// Setting Up Variables
let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let tasksContainer = document.querySelector('.tasks-content');
let tasksCount = document.querySelector('.tasks-count span');
let tasksCompleted = document.querySelector('.tasks-completed span');
let noTasksMsg = document.querySelector(".no-tasks-message");
let inputList = [];

window.onload= function(){
    theInput.focus(); 
}

theAddButton.onclick = function(){
    if(theInput.value === ''){
       alert("you should enter a task!")
    }else{
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            // Remove No Tasks Message
            noTasksMsg.remove();
          }
          if(checkTasks(inputList)){
            // Create Main Span Element
          let mainSpan = document.createElement('span');

          // Create Delete Button
          let deleteBtn = document.createElement('span');

          // Create The Main Span Text
          let text = document.createTextNode(theInput.value);
          inputList.push(theInput.value);
          console.log(inputList);
        

          // Create The Delete Button Text
          let textBtn = document.createTextNode("delete");

          // Add Text To Main Span
          mainSpan.appendChild(text);

          // Add Text To Delete Button
          deleteBtn.appendChild(textBtn);

         // Add Class To Main Span
          mainSpan.className = 'task-box';

          // Add Class To Delete Button
          deleteBtn.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteBtn);

        // Add The Task To The Container
        tasksContainer.appendChild(mainSpan);


          }
        // Empty The Input
        theInput.value = '';

        // Focus On Field
        theInput.focus();
        CountTasks();


       

    }
}
//toggle tasks
document.addEventListener('click', function(e){
    if(e.target.className=="delete"){

        // Remove Current Task
        e.target.parentNode.remove();
        CountTasks();

        if (tasksContainer.childElementCount == 0) {

            createNoTasks();
      
          }
    }

      // Finish Task
  if (e.target.classList.contains('task-box')) {

    // Toggle Class 'finished'
    e.target.classList.toggle("finished");
    CountTasks();

  }
})

function createNoTasks(){

// Create Message Span Element
  let msgSpan = document.createElement("span");
  let msgText = document.createTextNode("No Tasks to show");
  msgSpan.appendChild(msgText);
  msgSpan.className = 'no-tasks-message';

  tasksContainer.appendChild(msgSpan);
//  

}



function CountTasks(){
    tasksCount.innerHTML = document.querySelectorAll('.task-box span').length;
    tasksCompleted.innerHTML = document.querySelectorAll('.finished span').length;
}

function checkTasks(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].innerHTML);
        if(arr[i]=== theInput.value){
            alert('you already mention this task before');
            return false;
        }
    }

return true;
}


document.addEventListener('click', function(e){
  if(e.target.className=="deleteAll"){

      // Remove Current Task
  let allTasks =  document.querySelectorAll('.task-box');
  allTasks.forEach(function(item){
    return item.remove();
  });
  location.reload();
  }

})

document.addEventListener('click', function(e){
  if(e.target.className=="finishAll"){

      // Remove Current Task
  let allTasks =  document.querySelectorAll('.task-box');
  allTasks.forEach(function(item){
    return item.classList.toggle("finished");
  });
  CountTasks();

  }

})