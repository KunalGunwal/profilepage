const calculate = () => {
    let height = parseFloat(document.getElementById("heightform").value);
    let weight = parseFloat(document.getElementById("weightform").value);
    var bmi = (weight*10000)/(height*height);
    var state = "";
    if(bmi<18.5){
        state = "Underweight";
    }
    else if(bmi>=18.5 && bmi<25){
        state = "Normal";
    }
    else if(bmi>=25 && bmi<30){
        state = "Overweight";
    }
    else if(bmi>=30 && bmi<35){
        state = "Obese";
    }
    else if(bmi>=35){
        state = "Exteremely Obese";
    }
    document.getElementById("resultbmi").innerHTML = `Your BMI is ${bmi}`;
    document.getElementById("resultstate").innerHTML = `Your are ${state}`;
}