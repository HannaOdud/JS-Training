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
        const happyArray = emojiDate.Happy;
        const index = Math.floor(Math.random()* happyArray.length);
        const element = happyArray[index];
        const emoji = element.emoji;
        const name = element.name;

        const pEmoji = document.createElement("p");
        pEmoji.textContent = emoji;
        const pName = document.createElement("p");
        pName.textContent = name;
        emojiContainer.innerHTML = "";
        emojiContainer.appendChild(pEmoji);
        emojiContainer.appendChild(pName);
    })
    sad.addEventListener("click", () => {
        const sadArray = emojiDate.Sad;
        const index = Math.floor(Math.random()* sadArray.length);
        const element = sadArray[index];
        const emoji = element.emoji;
        const name = element.name;

        const pEmoji = document.createElement("p");
        pEmoji.textContent = emoji;
        const pName = document.createElement("p");
        pName.textContent = name;
        emojiContainer.innerHTML = "";
        emojiContainer.appendChild(pEmoji);
        emojiContainer.appendChild(pName);
    })
    angry.addEventListener("click", () => {
        const angryArray = emojiDate.Angry;
        const index = Math.floor(Math.random()* angryArray.length);
        const element = angryArray[index];
        const emoji = element.emoji;
        const name = element.name;

        const pEmoji = document.createElement("p");
        pEmoji.textContent = emoji;
        const pName = document.createElement("p");
        pName.textContent = name;
        emojiContainer.innerHTML = "";
        emojiContainer.appendChild(pEmoji);
        emojiContainer.appendChild(pName);
    })
    excited.addEventListener("click", () => {
        const excitedArray = emojiDate.Excited;
        const index = Math.floor(Math.random()* excitedArray.length);
        const element = excitedArray[index];
        const emoji = element.emoji;
        const name = element.name;

        const pEmoji = document.createElement("p");
        pEmoji.textContent = emoji;
        const pName = document.createElement("p");
        pName.textContent = name;
        emojiContainer.innerHTML = "";
        emojiContainer.appendChild(pEmoji);
        emojiContainer.appendChild(pName);
    })
    random.addEventListener("click", () => {
        const arrays = [emojiDate.Excited,emojiDate.Sad, emojiDate.Angry,emojiDate.Happy ];
        const arrayIndex = Math.floor(Math.random()* arrays.length);
        const randomArray = arrays[arrayIndex];

        const index = Math.floor(Math.random()* randomArray.length);
        const element = randomArray[index];
        const emoji = element.emoji;
        const name = element.name;

        const pEmoji = document.createElement("p");
        pEmoji.textContent = emoji;
        const pName = document.createElement("p");
        pName.textContent = name;
        emojiContainer.innerHTML = "";
        emojiContainer.appendChild(pEmoji);
        emojiContainer.appendChild(pName);
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