function chooseCorrectAudio(e) {
  const keyCode = e.keyCode;
  const audioElem = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audioElem) return;

  audioElem.currentTime = 0;
  audioElem.play();

  const keyElem = document.querySelector(`div[data-key="${keyCode}"]`);
  keyElem.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", chooseCorrectAudio);

const keysElem = document.querySelectorAll(".key");
keysElem.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);
