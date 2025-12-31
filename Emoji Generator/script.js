async function setup(){
    const emojiDate = await fetchEmojis();
    const emojiContainer = document.getElementById("emojiContainer");
    const happy = document.getElementById("happy");
    const sad = document.getElementById("sad");
    const angry = document.getElementById("angry");
    const excited = document.getElementById("excited");
    const random = document.getElementById("random");
    //click on button "happy"
    happy.addEventListener("click", () => {

    })
    sad.addEventListener("click", () => {

    })
    angry.addEventListener("click", () => {

    })
    excited.addEventListener("click", () => {

    })
    random.addEventListener("click", () => {

    })


}

async function fetchEmojis() {
  const url = "Emoji.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}





window.onload = setup;