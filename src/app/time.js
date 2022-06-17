
const printHtml = document.querySelector("#main-watch");

const timePrint = (dom)=>{ 
  const hours = String(new Date().getHours()).padStart(2,"0");
  const minutes = String(new Date().getMinutes()).padStart(2,"0");
  const seconds = String(new Date().getSeconds()).padStart(2,"0");
  const printTime = `${hours} : ${minutes} : ${seconds}`;
    dom.innerHTML = printTime;
}
timePrint(printHtml)
setInterval(()=>{
    timePrint(printHtml)
}, 1000);

