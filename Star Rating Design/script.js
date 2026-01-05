function setup(){
    const star1 = document.getElementById("1");
    const star2 = document.getElementById("2");
    const star3 = document.getElementById("3");
    const star4 = document.getElementById("4");
    const star5 = document.getElementById("5");
    const rating = document.getElementById("rating");

    star1.addEventListener("click",()=>{
        star1.style.color = "#ff0000";
        rating.textContent = "1";
    })

    star2.addEventListener("click",()=>{
        star1.style.color = "#ff5e00";
        star2.style.color = "#ff5e00";
        rating.textContent = "2";
    })

    star3.addEventListener("click",()=>{
        star1.style.color = "#fbff78";
        star2.style.color = "#fbff78";
        star3.style.color = "#fbff78";
        rating.textContent = "3";
    })

      star4.addEventListener("click",()=>{
        star1.style.color = "#ffff00";
        star2.style.color = "#ffff00";
        star3.style.color = "#ffff00";
        star4.style.color = "#ffff00";
        rating.textContent = "4";
    })

     star5.addEventListener("click",()=>{
        star1.style.color = "#189f0e";
        star2.style.color = "#189f0e";
        star3.style.color = "#189f0e";
        star4.style.color = "#189f0e";
        star5.style.color = "#189f0e";
        rating.textContent = "5";
    })


}



window.onload = setup;