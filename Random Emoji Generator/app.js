const btnEmoji = document.querySelector(".btn-emoji");
const emojiName = document.getElementById("emoji-name");
const btnCopyEmoji= document.querySelector(".btn-copy-emoji");


const emoji = [];

async function getEmoji(){
    let response = await fetch(
        "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
    );

    data = await response.json();

    for (let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();

btnEmoji.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * emoji.length);
    btnEmoji.innerText = emoji[randomNumber].emojiName;
    emojiName.innerText = emoji[randomNumber].emojiCode;
})

btnCopyEmoji.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.value = btnEmoji.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Emoji copied to clipboard!");
});
