
        // QUESTION 1: SIGNUP FORM

    // QUESTION 1: SIGNUP FORM

function post() {

    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var userEmail = document.getElementById("userEmail").value;

    console.log("Name: " + userName);
    console.log("Email: " + userEmail);
    console.log("Password: " + userPassword);

    document.getElementById("result").innerHTML =
        "Name: " + userName +
        "<br>Email: " + userEmail +
        "<br>Password: " + userPassword;
}



        // QUESTION 2: READ MORE

    function expand() {
var shortPara = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.";

    var expandedParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";

    if (document.getElementById("link").innerHTML === "see more...") {
        document.getElementById("slowLoris").innerHTML = expandedParagraph;
        document.getElementById("link").innerHTML = "see less";
    } else {
        document.getElementById("slowLoris").innerHTML = shortPara;
        document.getElementById("link").innerHTML = "see more...";
    }
}


    // QUESTION 3: DELETE AND EDIT TABLE

    var selectedRow = null;

               function addStudent(event){
            event.preventDefault()
var nameValue = document.getElementById("studentName").value
var classValue = document.getElementById("studentClass").value
var rollValue = document.getElementById("studentRoll").value
var emailValue = document.getElementById("studentEmail").value


var tableBody = document.getElementById("studentTable")
var row = document.createElement("tr")

row.innerHTML = `<td>${nameValue}</td>
                 <td>${classValue}</td>
                 <td>${rollValue}</td>
                 <td>${emailValue}</td>
<td><button type="button" onclick="editRow(this)">Edit</button>
<button type="button" onclick="dltRow(this)">Delete</button></td>`
tableBody.appendChild(row)

// or

// studentTable.innerHTML += `
// <tr><td>${nameValue}</td>
//                  <td>${classValue}</td>
//                  <td>${rollValue}</td>
//                  <td>${emailValue}</td>
// <td><button onclick="editRow">Edit</button>
// <button onclick="dltRow">Delete</button></td></tr>`
        }


function dltRow(e){

//    e.closest("tr").remove();

   //  or

   var activeRow = e.parentNode.parentNode
console.log(activeRow)
activeRow.remove()

//   or
// document.getElementById("studentName").value = "";
// document.getElementById("studentClass").value = "";
// document.getElementById("studentRoll").value = "";
// document.getElementById("studentEmail").value = "";

}

function editRow(e) {

    selectedRow = e.parentNode.parentNode;

    var currentName = selectedRow.children[0].textContent;
    var currentClass = selectedRow.children[1].textContent;
    var currentRoll = selectedRow.children[2].textContent;
    var currentEmail = selectedRow.children[3].textContent;

    document.getElementById("editForm").style.display = "block";

    document.getElementById("editName").value = currentName;
    document.getElementById("editClass").value = currentClass;
    document.getElementById("editRoll").value = currentRoll;
    document.getElementById("editEmail").value = currentEmail;
}



document.getElementById("editForm").onsubmit = function(event) {

    event.preventDefault();

    selectedRow.children[0].textContent =
        document.getElementById("editName").value;

    selectedRow.children[1].textContent =
        document.getElementById("editClass").value;

    selectedRow.children[2].textContent =
        document.getElementById("editRoll").value;

    selectedRow.children[3].textContent =
        document.getElementById("editEmail").value;

    document.getElementById("editForm").style.display = "none";

    selectedRow = null;
};




function cancelEdit() {

    document.getElementById("editForm").style.display = "none";

    selectedRow = null;
}


