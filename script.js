const messages = [
  "Every great adventure starts with one small wave.",
  "The sea looks wide. Good. More room for dreams.",
  "Treasure map? I call it a to-do list with sparkle.",
  "Today feels perfect for chasing a new horizon.",
  "Crew rule one: bring snacks for the journey.",
  "A brave heart fits in even the smallest sailor.",
  "The best stories begin with: what if we sail?",
  "Keep your compass kind and your curiosity loud.",
  "New islands, same tiny captain energy.",
  "The wind says hello. I say hello back."
];

const message = document.querySelector("#message");
const talkButton = document.querySelector("#talkButton");
const shareButton = document.querySelector("#shareButton");
const shareStatus = document.querySelector("#shareStatus");

console.assert(messages.length > 1, "Talk needs at least two messages.");

function pickNextMessage(currentMessage) {
  const choices = messages.filter((item) => item !== currentMessage);
  return choices[Math.floor(Math.random() * choices.length)];
}

function setStatus(text) {
  shareStatus.textContent = text;
  window.setTimeout(() => {
    if (shareStatus.textContent === text) shareStatus.textContent = "";
  }, 2400);
}

async function copyCurrentUrl() {
  const url = window.location.href;

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return;
  }

  const input = document.createElement("textarea");
  input.value = url;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

talkButton.addEventListener("click", () => {
  message.textContent = pickNextMessage(message.textContent);
});

shareButton.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({ title: "minime", url: window.location.href });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await copyCurrentUrl();
    setStatus("Link copied.");
  } catch {
    setStatus("Could not copy link.");
  }
});
