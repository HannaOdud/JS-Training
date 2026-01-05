const colors = ["#ff0000","#ff5e00", "#fbff78", "#ffff00", "#189f0e" ]
function setup(){
    const star1 = document.getElementById("1");
    const star2 = document.getElementById("2");
    const star3 = document.getElementById("3");
    const star4 = document.getElementById("4");
    const star5 = document.getElementById("5");
    const rating = document.getElementById("rating");

    star1.addEventListener("click",()=>{
        const id = star1.id;
        change(id);
    })
     star2.addEventListener("click",()=>{
        const id = star2.id;
        change(id);
    })
     star3.addEventListener("click",()=>{
        const id = star3.id;
        change(id);
    })
     star4.addEventListener("click",()=>{
        const id = star4.id;
        change(id);
    })
     star5.addEventListener("click",()=>{
        const id = star5.id;
        change(id);
    })

}

function change(id){
    for(let i=1; i<= id; i++){
        let star = document.getElementById(i);
        star.style.color = colors[id-1];
    }
    rating.textContent = id;
}

window.onload = setup;