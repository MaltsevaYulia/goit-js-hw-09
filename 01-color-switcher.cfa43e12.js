const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(()=>{t.startBtn.disabled=!0,e=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.cfa43e12.js.map