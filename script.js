// Simple Javascript code to calculate CGPA and display it
function loadform() //To load particular form based on number of completed semesters
{
    var sem = document.getElementById("inputGroupSelect01");
    var semValue = sem.options[sem.selectedIndex].value;
    document.getElementById("cgpa").style.marginTop = "50px";
    var deviceWidth = window.innerWidth;
    switch(semValue)
    {
        case "0": alert("Please select the number of semesters completed.");
        if(deviceWidth <= 600)
            document.getElementById("cgpa").style.marginTop = "30%";
        else
            document.getElementById("cgpa").style.marginTop = "10%";
        break;
        case "1": document.getElementById("s1").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s1").scrollIntoView();
        break;
        case "2": document.getElementById("s2").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s2").scrollIntoView();
        break;
        case "3": document.getElementById("s3").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s3").scrollIntoView();
        break;
        case "4": document.getElementById("s4").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s4").scrollIntoView();
        break;
        case "5": document.getElementById("s5").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s5").scrollIntoView();
        break;
        case "6": document.getElementById("s6").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s6").scrollIntoView();
        break;
        case "7": document.getElementById("s7").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s7").scrollIntoView();
        break;
        case "8": document.getElementById("s8").style.display = "block";
        if(deviceWidth<=600)
            document.getElementById("sem").style.width="100%";
        document.getElementById("s8").scrollIntoView();
        break;
    }
    //To hide forms when number of semesters is changed
    sem.onchange = function (){
        for(var i=1;i<=8;i++)
        {
            document.getElementById("s" + i).style.display = "none";
        }
        document.getElementById("result").innerHTML = "";
        if(deviceWidth <= 600)
        {
            document.getElementById("cgpa").style.marginTop = "30%";
        }
        else
        {
            document.getElementById("cgpa").style.marginTop = "10%";
        }
    }
}
//To calculate CGPA
function getcgpa()
{
    var sem = document.getElementById("inputGroupSelect01");
    var semValue = sem.options[sem.selectedIndex].value;
    var totalCredits = 0;
    var totalGradeP = 0;
    for(var i=0;i<semValue;i++)
    {
        var credits = parseFloat(document.getElementById("s"+semValue+(i+1)+"c").value);
        var sgpa = parseFloat(document.getElementById("s"+semValue+(i+1)+"pa").value);
        if(sgpa>10 || sgpa<0)
        {
            alert("SGPA should be between 0 and 10.");
            return false;
        }
        if(credits>30 || credits<0)
        {
            alert("Credits should be between 0 and 30.");
            return false;
        }
        totalGradeP += (credits*sgpa);
        totalCredits += credits;
    }
    var cgpa = totalGradeP/totalCredits;
    document.getElementById("result").innerHTML = "Your CGPA is: " + cgpa.toFixed(2);
    document.getElementById("result").scrollIntoView();
}