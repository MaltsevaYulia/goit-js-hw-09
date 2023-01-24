
const refs={
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  refs.startBtn.addEventListener('click', ()=>{
    refs.startBtn.disabled=true;
    timerId = setInterval(() => {
        const color=getRandomHexColor()
        document.body.style.backgroundColor=color;
      }, 1000);
  });

  refs.stopBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    refs.startBtn.disabled=false;
  })