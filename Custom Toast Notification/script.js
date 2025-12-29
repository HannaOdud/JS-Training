
function setup(){
  const submit = document.getElementById("submit");
  const failed = document.getElementById("failed");
  const info = document.getElementById("info");
  const warning = document.getElementById("warning");  
  submit.addEventListener("click",()=>{
    renderToast("Article submitted successfully",  "#17da17");
  })

   failed.addEventListener("click",()=>{
   renderToast("Failed unexpected error",  "#efaca5");
  })

   info.addEventListener("click",()=>{
    renderToast("Do POTD and Earn Coins",  "#3498db");
  })

   warning.addEventListener("click",()=>{
    renderToast("!warning! server error","warning",  "#ead994");
  })

  



} 
function renderToast(text, color){
    const div = document.createElement("div");
    div.classList = "toast";
    div.textContent = text;
    div.style.backgroundColor = color;
    const body = document.querySelector("body");
    body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 5000);
} 


window.onload = setup;