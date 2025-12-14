const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const pad = audio.parentElement;
  display.textContent = pad.id;
}

pads.forEach(pad => {
  pad.addEventListener("click", () => {
    playSound(pad.innerText.trim());
  });
});

document.addEventListener("keydown", (e) => {
  playSound(e.key.toUpperCase());
});
