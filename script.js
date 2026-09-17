const messages = [
  "กกต.หค.",
  "อหต.",
  "อหน.",
  "สั่งฟ้อง 229",
  "ร่างรัฐธรรมนูญใหม่ !",
  "ปล่อยทนายอานนท์ !",
  "ปล่อยเพื่อนเรา !",
  "อย่าลืม 6 ตุลา !"
];

const message = document.querySelector("#message");
const speechBubble = document.querySelector(".speech-bubble");
const talkButton = document.querySelector("#talkButton");
const shareButton = document.querySelector("#shareButton");
const shareStatus = document.querySelector("#shareStatus");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let bubbleShake;

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

function shakeBubble() {
  if (reducedMotion.matches) return;

  bubbleShake?.cancel();
  bubbleShake = speechBubble.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-6px)" },
      { transform: "translateX(6px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 200, easing: "cubic-bezier(0.77, 0, 0.175, 1)" }
  );
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
  const copied = document.execCommand("copy");
  input.remove();
  if (!copied) throw new Error("Copy failed.");
}

talkButton.addEventListener("click", () => {
  message.textContent = pickNextMessage(message.textContent);
  shakeBubble();
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
