function setup(){
    const numDom = document.getElementById("value");
    const decDom = document.getElementById("dec");
    const incDom = document.getElementById("inc");

    const decClickDom = document.getElementById("dec_click");
    const incClickDom = document.getElementById("inc_click");

    decDom.addEventListener("click", () =>{
        let num = Number(numDom.textContent);
        num--;
        numDom.textContent = num;
        let decClicks = Number(decClickDom.textContent);
        decClicks++;
        decClickDom.textContent = decClicks;
    })

    incDom.addEventListener("click",()=>{
        let num = Number(numDom.textContent);
        num++; 
        numDom.textContent = num;
        let incClicks = Number(incClickDom.textContent);
        incClicks++;
        incClickDom.textContent = incClicks;
    })




}




window.onload = setup;