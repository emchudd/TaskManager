//TASK MANAGER

//Template lteral allows us to create separate lines 
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

//Array for storing tasks
const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
];

//For displaying tasks for the user
let showTasks = "";

//For storing the value of a new task
let newTask;

//For storing the number of the task to be removed
let num;

//For storing the value of the removed task
let removed;

//Displays the menu for the user to select an option. Also sets the user's response to the userInput variable. Also, converts the value to uppercase.
 let userInput = prompt(menu).toUppercase();

//Loops and continues to display the menu until the user ends the program.
 //(if their input is strictly not equal to close) 
 while(userInput !== "CLOSE"){
    //Checks if user entetered "TASKS"
    if (userInput === "TASKS"){
    //CODE that will run if user chooses TASKS
    //(for of loop iterates through values of tasks array
     //Concatenates each task (AKA item) in the tasks array to the showTasks string variable
    for (task of tasks){
        //using \n to create a new line (aka line break)
        showTasks += `${task}\n`;
        }
        //Displays current task to the user
        alert(showTasks);
        //Sets the value of the showTasks string variable back to an empty string
        showTasks = "";
    } else if (userInput === "NEW"){
        //Prompts the user to enter a new task and stores their response
        newTask = prompt(`Please enter the 
        new task:`);

        //Loop that continues looping until user enters something
        while(true) {
            //Checks if user entered nothing
           if (newTask === ""){
            //Prompts user again to enter a new task
            newtask = prompt(`Please enter the new task:`);
           }else {
               //Breaks out of the loop since the user entered something
               break;
           }
        }

        //Alerts the user that their new task has been added
        alert(`"${newTask}" has been added!`);
        //Adds the user's entry as a new item at the end of the tasks array
        tasks.push(newTask);
        //Checks if the user entered "REMOVE"
    }else if (userInput === "REMOVE"){
        //Loop that continues until user enters a valid number
        while(true){
        //Concatenates each task/item in the tasks array to the showTasks string variable. Also, sets number for each task. 
        for (i = 0; i < tasks.length; i++){
            //Using \n to create a new line. Also, adding 1 to i (AKA the index) so the numbers will start displaying at 1. 
            showTasks += `${i + 1}: ${tasks[i]}\n`;   
        }
        //Prompts the user to enter the number and stores their response. Also, using \n to create a new line. Finally subtracting 1 from the user's entry so it matching the index in the tasks array. (NOTE: jS will attempt to convert a string into a number when you try to convert a string into a number when you try to subtract from it. Just like parseInt. So parseInt isnt actually necessary here.)
        num = parseInt(prompt(`Please enter a number to remove:\n${showTasks}`))-1;
        //num = prompt(`Please enter a number to remove:\n${showTasks}`)-1;

        //Verifies that the user entered a number within the index/number range 
        if (num >= 0 && tasks.length){
            
        
        //Removes the selected task/item and sets that task/value in the removed variable
        removed = tasks.splice(num, 1);
        //Alerts user with the task/item that has been removed (NOTE: Using index on the "removed" variable because splice returns what is removed in an array)
        alert(`"${removed[0]}" has been removed`);
        //Sets the value of the showTasks string variable back to an empty string
        showTasks = "";
        //Breaks out of the loop since the user entered a valid index/number
        break;
        } else {
            //Alerts the user that they have not entered a valid number
            alert(`Not a valid entry`);
            //Sets the value of the showTasks string variable back to an empty string
        showTasks = "";
        }
    
        }
    }
    
    //Displays the menu again. Also, converting value to uppercase.
    userInput = prompt(menu).toUppercase();
}
    
 
//Alerts the user thay they have closed the program
alert(`Thank you for using Task Manager!`);


