
g_dayDisplay = document.getElementById("outputdays");
g_hourDisplay = document.getElementById("outputhours");
g_minuteDisplay = document.getElementById("outputminutes");
g_secondDisplay = document.getElementById("outputseconds");



var days;

var hours;

var minutes;

var seconds;

function obtainValues(){

days=document.getElementById("originaldays").value;

hours=document.getElementById("originalhours").value;

minutes=document.getElementById("originalminutes").value;

seconds=document.getElementById("originalseconds").value;
console.log(seconds);
setTimerValues(days,hours,minutes,seconds);

}


function setTimerValues(days,hours,minutes,seconds){

g_dayDisplay.innerHTML= days;

g_hourDisplay.innerHTML= hours;

g_minuteDisplay.innerHTML= minutes;

g_secondDisplay.innerHTML= seconds;
}

var timerInstance;

function runTimer(state){
    if(state=="start"){
        if (timerInstance!=null) {
            clearTimeout(timerInstance);
        }
        timerInstance = setInterval(function(){
            if (isTimerValid()) {
                countDown();
                setTimerValues(days,hours,minutes,seconds);
            }
        },1000);
    }
    else if(state == "pause"){
        clearTimeout(timerInstance);
    }
    else if(state=="reset"){
        clearTimeout(timerInstance);
        resetTheTimer();
    }
}

function isTimerValid(){

  if(seconds>0 || minutes>0 || hours>0 || days>0){
    return true;
  }
  else if(seconds==0 && minutes==0 && hours==0 && days==0){
    return false;
  }
}



function countDown()
{

  // this function contains the actuall countDown logic
  seconds--;
  if(seconds<=0 && (minutes>0 || hours>0 || days>0))
  {
    seconds = 59;
    minutes--;
    if(minutes<=0 && (hours>0 || days>0))
    {
      minutes = 59;
      hours--;
      if(hours<=0 && days>0)
      {
        hours = 23;
        days--;
        if(days<=0)
        {
          days = 0;
        }
      }
    }
  }
}

function resetTheTimer()
{
  setTimerValues(0,0,0,0);
}



document.getElementById("setTimerBtn").addEventListener("click",function(){obtainValues();} );
document.getElementById("startBtn").addEventListener("click",function(){runTimer("start");} );
document.getElementById("pauseBtn").addEventListener("click",function(){runTimer("pause");});
document.getElementById("resumeBtn").addEventListener("click",function(){runTimer("start");});
document.getElementById("resetBtn").addEventListener("click",function(){runTimer("reset");} );
