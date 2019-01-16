window.onload = function(){
    displayDate();
    var ipUrl= "https://ipinfo.io.json";
    var appId = "appid=1f512e3a504beafae4beebfe2d4f901d";
    var location = document.getElementById("displayLoc");
    console.log(location);
}




//getting date and time for menu bar

function displayDate(){
    var dt= new Date();
    var Fulldate= document.getElementById("date");
    var fullTime= document.getElementById("time");
    var session= "AM";
    //date
    d= dt.getDate();
    m=dt.getMonth();
    y=dt.getFullYear();
    Fulldate.innerHTML=`${d}/${d+1}/${y}`;

    //time
    h=dt.getHours();
    m=dt.getMinutes();

    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session= "PM";
    }

    h=(h<10) ? "0"+h :h;
    m=(m<10) ? "0"+m :m;

    fullTime.innerHTML=`${h}:${m} ${session}`;
}