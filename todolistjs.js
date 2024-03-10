const addtask = () => {
    let task = document.getElementById("inputtask").value;
    let p1 = document.getElementById("task1");
    let p2 = document.getElementById("task2");
    let p3 = document.getElementById("task3");
    let p4 = document.getElementById("task4");
    let p5 = document.getElementById("task5");
    let p6 = document.getElementById("task6");

    if (p1.innerHTML === "") {
        p1.innerHTML = task;
        let deletebtn = document.createElement("button");
        let donebtn = document.createElement("button");
        donebtn.innerText = "Done";
        deletebtn.innerText = "Delete";
        p1.appendChild(deletebtn);
        p1.appendChild(donebtn);

        donebtn.onclick = function() {
            p1.style.textDecoration = "line-through";
        };

        deletebtn.onclick = function() {
            p1.innerHTML = "";
        };
    } else if (p2.innerHTML === "") {
        p2.innerHTML = task;
        let deletebtn = document.createElement("button");
        let donebtn = document.createElement("button");
        donebtn.innerText = "Done";
        deletebtn.innerText = "Delete";
        p2.appendChild(deletebtn);
        p2.appendChild(donebtn);

        donebtn.onclick = function() {
            p2.style.textDecoration = "line-through";
        };

        deletebtn.onclick = function() {
            p2.innerHTML = "";
        };
    } else if (p3.innerHTML === "") {
        p3.innerHTML = task;
        let deletebtn = document.createElement("button");
        let donebtn = document.createElement("button");
        donebtn.innerText = "Done";
        deletebtn.innerText = "Delete";
        p3.appendChild(deletebtn);
        p3.appendChild(donebtn);

        donebtn.onclick = function() {
            p3.style.textDecoration = "line-through";
        };

        deletebtn.onclick = function() {
            p3.innerHTML = "";
        };
    } else if (p4.innerHTML === "") {
        p4.innerHTML = task;
        let deletebtn = document.createElement("button");
        let donebtn = document.createElement("button");
        donebtn.innerText = "Done";
        deletebtn.innerText = "Delete";
        p4.appendChild(deletebtn);
        p4.appendChild(donebtn);

        donebtn.onclick = function() {
            p4.style.textDecoration = "line-through";
        };

        deletebtn.onclick = function() {
            p4.innerHTML = "";
        };
    } else if (p5.innerHTML === "") {
        p5.innerHTML = task;
        let deletebtn = document.createElement("button");
        let donebtn = document.createElement("button");
        donebtn.innerText = "Done";
        deletebtn.innerText = "Delete";
        p5.appendChild(deletebtn);
        p5.appendChild(donebtn);

        donebtn.onclick = function() {
            p5.style.textDecoration = "line-through";
        };

        deletebtn.onclick = function() {
            p5.innerHTML = "";
        };
    } else if (p6.innerHTML === "") {
        p6.innerHTML = task;
        let deletebtn = document.createElement("button");
        let donebtn = document.createElement("button");
        donebtn.innerText = "Done";
        deletebtn.innerText = "Delete";
        p6.appendChild(deletebtn);
        p6.appendChild(donebtn);

        donebtn.onclick = function() {
            p6.style.textDecoration = "line-through";
        };

        deletebtn.onclick = function() {
            p6.innerHTML = "";
        };
    } else {
        document.getElementById("elsecondition").innerHTML = "Your task basket is full.";
    }
};

