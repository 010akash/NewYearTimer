const day=document.getElementById("day-p");
const hour=document.getElementById("hour-p");
const mins=document.getElementById("mins-p");
const seconds=document.getElementById("sec-p");

const newYear= "1 Jan 2024";

function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate= new Date();
    const totalSeconds=(newYearDate - currentDate) /1000;
    

    const tday= Math.floor(totalSeconds / 3600 / 24);
    const thour= Math.floor(totalSeconds / 3600 ) %24;
    const tmins= Math.floor(totalSeconds / 60) % 60;
    const tseconds= Math.floor(totalSeconds) % 60;
    
    day.innerHTML=tday;
    hour.innerHTML=formatTime(thour);
    mins.innerHTML=formatTime(tmins);
    seconds.innerHTML=formatTime(tseconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
// }
}
countdown();
setInterval(countdown,1000);