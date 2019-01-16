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

    function addZero(e){
        return (e<10) ? "0"+e : e;
    }

    //date
    d= dt.getDate();
    m=dt.getMonth()+1;
    y=dt.getFullYear();

    d=addZero(d);
    m=addZero(m);
    Fulldate.innerHTML=`${d}/${m}/${y}`;

    //time
    h=dt.getHours();
    min=dt.getMinutes();
    s=dt.getSeconds();

    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session= "PM";
    }

    h=addZero(h);
    min=addZero(min);
    s=addZero(s);

    fullTime.innerHTML=`${h}:${min}:${s} ${session}`;

    setTimeout(displayDate,1000);
}