function setup(){
    //found DOM elements to work with
    const inputBirth = document.getElementById("dateOfBirth");
    const inputCurrent = document.getElementById("currentDate");
    const button = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    const inputDiv = document.getElementById("inputs");
    // we create calculation when buttton is clicked
    button.addEventListener("click", ()=>{
        const birthDate = inputBirth.value;
        const currentDate = inputCurrent.value;
        const p =document.createElement("p");
        const fullYears = fullYearsBetween(birthDate, currentDate);
        if (fullYears < 2){
            p.textContent = "Your age is "+fullYears+" year." ;
        }
        else{
            p.textContent = "Your age is "+fullYears+" years." ;
        }
        inputDiv.appendChild(p);
    })
}


function fullYearsBetween(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let years = end.getFullYear() - start.getFullYear();
  // Check if anniversary has not occurred yet
  const anniversary = new Date(start);
  anniversary.setFullYear(start.getFullYear() + years);
  if (end < anniversary) {
    years--;
  }
  return years;
}







window.onload = setup;
