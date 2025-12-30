function setup(){
    let chemistry = document.getElementById("chemistry");
    let hindi = document.getElementById("hindi");
    let math = document.getElementById("math");
    let physics = document.getElementById("physics");
    let button = document.getElementById("button");
    button.addEventListener("click",(event) =>{
        event.preventDefault();
        let grade = "";
        let message = "";
        let total = parseFloat(chemistry.value) + parseFloat(hindi.value) + parseFloat(math.value) + parseFloat(physics.value);
        let percentage = (total/400) * 100;
        const p = document.createElement("p");

        if (percentage <= 100 && percentage >= 80){
            grade = "A";
            message = "You are pass."
        }
        else if (percentage <= 79 && percentage >= 60) {
            grade = "B"; 
            message = "You are pass."
        }
        else if (percentage <= 59 && percentage >= 40){
            grade = "C";
            message = "You are pass."
        }
        else{ grade = "F"
            message = "You are fail."
        }


        p.textContent = `Out of 400 your total is ${total} and percentage is ${percentage}% 
        Your grade is ${ grade}. `+message;
        const container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(p);


    })
}








window.onload = setup;