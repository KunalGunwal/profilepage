const calculate = () => {
    let DMS = parseFloat(document.getElementById("DMS").value);
    let COA = parseFloat(document.getElementById("COA").value);
    let DSA = parseFloat(document.getElementById("DSA").value);
    let WEBD =parseFloat(document.getElementById("WEBD").value);
    let PDC = parseFloat(document.getElementById("PDC").value);
    let POM = parseFloat(document.getElementById("POM").value);
    let PHE = parseFloat(document.getElementById("PHE").value);
    let percentage = (DMS*4 + COA*4 + DSA*4 + WEBD*2 + PDC*3 + POM*2 + PHE)/20;
    let grade = "";
    if(percentage>=90){
        grade = "A+";
    }
    else if(percentage>=80 && percentage<90){
        grade = "A";
    }
    else if(percentage>=70 && percentage<80){
        grade = "B+";
    }
    else if(percentage>=60 && percentage<70){
        grade = "B";
    }
    else if(percentage>=50 && percentage<60){
        grade = "C";
    }
    else if(percentage>=35 && percentage<50){
        grade = "D";
    }
    else{
        grade = "F";
    }
    if(DMS == "" || COA == "" || DSA == "" || WEBD == "" || PDC == "" || POM == "" || PHE == ""){
        document.querySelector("#showtext").innerHTML = "Please enter all fields";
    }
    else { 
        if(grade == "F"){
            document.querySelector("#showtext").innerHTML = "You got F grade";
            document.querySelector("#divfail").style.visibility = "visible";
        }
        else {
            document.querySelector("#showtext").innerHTML= `You got ${grade} and ${percentage}%`;
            document.querySelector("#divpass").style.visibility = "visible";
        }
    }
};