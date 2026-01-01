function setup(){
    const valueDom = document.getElementById("value");
    const dec = document.getElementById("dec");
    const inc = document.getElementById("inc");
    const dec_clickDom = document.getElementById("dec_click");
    const inc_clickDom = document.getElementById("inc_click");

    dec.addEventListener("click", () =>{
        //change h1
        let number = Number(valueDom.textContent);
        number--;
        valueDom.textContent = number;
        //change p
        let dec_click = Number(dec_clickDom.textContent);
        dec_click++;
        dec_clickDom.textContent = dec_click;
    })
      inc.addEventListener("click", () =>{
        //change h1
        let number = Number(valueDom.textContent);
        number++;
        valueDom.textContent = number;
        //change p
        let inc_click = Number(inc_clickDom.textContent);
        inc_click++;
        inc_clickDom.textContent = inc_click;
    })



}





window.onload = setup;