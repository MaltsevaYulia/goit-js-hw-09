const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(()=>{t.startBtn.disabled=!0,timerId=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(timerId),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8b61c34e.js.map
