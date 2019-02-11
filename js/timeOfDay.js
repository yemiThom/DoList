function checkTimeOfDay(){
    var theHours = new Date().getHours();
    var greetingTxt;
    var morning = "Good morning";
    var afternoon = "Good afternoon";
    var evening = "Good evening";

    if(theHours >= 0 && theHours < 12){
        greetingTxt = morning;
        document.getElementById("main_wrapper").className = "morning";
        document.getElementsByClassName("morning")[0].style.opacity = 1;
    }else if(theHours >= 12 && theHours < 17){
        greetingTxt = afternoon;
        document.getElementById("main_wrapper").className = "afternoon";
        document.getElementsByClassName("afternoon")[0].style.opacity = 1;
    }else if(theHours >= 17 && theHours < 24){
        greetingTxt = evening;
        document.getElementById("main_wrapper").className = "evening";
        document.getElementsByClassName("evening")[0].style.opacity = 1;
    }
}

setInterval(checkTimeOfDay, 1000);