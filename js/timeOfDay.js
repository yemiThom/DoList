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
        document.getElementById("welcomeText").innerHTML = morning + ", " + localStorage.getItem("dolist_username") + "! Here are your tasks for today.";
    }else if(theHours >= 12 && theHours < 17){
        greetingTxt = afternoon;
        document.getElementById("main_wrapper").className = "afternoon";
        document.getElementsByClassName("afternoon")[0].style.opacity = 1;
        document.getElementById("welcomeText").innerHTML = afternoon + ", " + localStorage.getItem("dolist_username") + "! Here are your tasks for today.";
    }else if(theHours >= 17 && theHours < 24){
        greetingTxt = evening;
        document.getElementById("main_wrapper").className = "evening";
        document.getElementsByClassName("evening")[0].style.opacity = 1;
        document.getElementById("welcomeText").innerHTML = evening + ", " + localStorage.getItem("dolist_username") + "! Here are your tasks for today.";
    }
}

setInterval(checkTimeOfDay, 1000);