function setup(){
    const valueDom = document.getElementById("value");
    const dec = document.getElementById("dec");
    const inc = document.getElementById("inc");
    const dec_clickDom = document.getElementById("dec_click");
    const inc_clickDom = document.getElementById("inc_click");

    let number = 0;
    let dec_click = 0;
    let inc_click = 0;

    dec.addEventListener("click", () =>{
        //change h1
        number--;
        valueDom.textContent = number;
        //change p
        dec_click++;
        dec_clickDom.textContent = dec_click;
    })
      inc.addEventListener("click", () =>{
        //change h1
        number++;
        valueDom.textContent = number;
        //change p
        inc_click++;
        inc_clickDom.textContent = inc_click;
    })



}





window.onload = setup;