// script.js
const intro = "🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂";
let i = 0;
const introText = document.getElementById("introText");
const accessArea = document.getElementById("accessArea");
const error = document.getElementById("error");
const buyKeyBtn = document.getElementById("buyKeyBtn");
const spamSection = document.getElementById("spamSection");
const spamStatus = document.getElementById("spamStatus");
const poweredText = document.getElementById("poweredText");

function typeIntro() {
  if (i < intro.length) {
    introText.innerHTML += intro.charAt(i);
    i++;
    setTimeout(typeIntro, 100);
  } else {
    setTimeout(() => {
      introText.classList.add("hidden");
      accessArea.classList.remove("hidden");
    }, 500);
  }
}

function checkKey() {
  const key = document.getElementById("accessKey").value;
  if (key === "𝙰𝙽𝙹𝙰𝙽𝙰-20070418") {
    accessArea.classList.add("hidden");
    spamSection.classList.remove("hidden");
  } else {
    error.classList.remove("hidden");
    buyKeyBtn.classList.remove("hidden");
  }
}

async function sendSpam() {
  const number = document.getElementById("whatsappNumber").value;
  const count = parseInt(document.getElementById("spamCount").value);
  spamStatus.innerHTML = "<span class='neon'>Sending...</span>";

  for (let i = 1; i <= count; i++) {
    spamStatus.innerHTML += `<br/>Sending ${i}`;
    await fetch(`https://api.green-api.com/waInstance7105227439/sendMessage/ebd168b08c52467d93a45535efc8100ca2fb93eb8e8f4b7f97`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: `${number}@c.us`,
        message: `Linked Device Notification ${i}`
      })
    });
    await new Promise(r => setTimeout(r, 1000));
  }

  poweredText.classList.remove("hidden");
  setTimeout(() => {
    poweredText.classList.add("hidden");
    spamStatus.innerHTML += "<br/><button class='bg-green-700 px-4 py-2 rounded mt-4'>Success</button>";
  }, 3000);
}

typeIntro();
