function checkTimeOfDay(){
    var theHours = new Date().getHours();
    var greetingTxt;
    var morning = "Good morning";
    var afternoon = "Good afternoon";
    var evening = "Good evening";

    if(theHours >= 0 && theHours < 12){
        greetingTxt = morning;
        document.getElementById("main_wrapper").className = "morning";
    }else if(theHours >= 12 && theHours < 17){
        greetingTxt = afternoon;
        document.getElementById("main_wrapper").className = "afternoon";
    }else if(theHours >= 17 && theHours < 24){
        greetingTxt = evening;
        document.getElementById("main_wrapper").className = "evening";
    }
}

setInterval(checkTimeOfDay, 1000);