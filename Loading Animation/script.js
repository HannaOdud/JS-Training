
function setup(){
    const button = document.getElementById("button");
    const loader = document.getElementById("loader");
    button.addEventListener("click", (event) =>{
        event.preventDefault();
        loader.style.display = "block";
        setTimeout(() =>{
        loader.style.display = "none";
        },2000);
    })
}

window.onload = setup;