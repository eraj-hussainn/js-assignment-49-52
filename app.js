
        // QUESTION 1: SIGNUP FORM

        var signupForm = document.getElementById("signupForm");

        signupForm.addEventListener("submit", function(event) {

            event.preventDefault();

            var name = document.getElementById("userName").value;
            var email = document.getElementById("userEmail").value;
            var password = document.getElementById("userPassword").value;

            document.getElementById("signupData").innerHTML =
                "<h3>Signup Information</h3>" +
                "<p>Name: " + name + "</p>" +
                "<p>Email: " + email + "</p>" +
                "<p>Password: " + password + "</p>";

            signupForm.reset();

        });



        // QUESTION 2: READ MORE

        function readMore() {

            var moreText = document.getElementById("moreText");
            var readBtn = document.getElementById("readBtn");

            if (moreText.style.display === "none") {

                moreText.style.display = "inline";
                readBtn.innerHTML = "Read Less";

            } else {

                moreText.style.display = "none";
                readBtn.innerHTML = "Read More";

            }

        }



        // QUESTION 3: STUDENT DETAILS

        var studentForm = document.getElementById("studentForm");

        var studentTable = document.getElementById("studentTable");

        var students = [];

        var editIndex = -1;


        // ADD STUDENT

        studentForm.addEventListener("submit", function(event) {

            event.preventDefault();

            var name = document.getElementById("studentName").value;
            var studentClass = document.getElementById("studentClass").value;
            var roll = document.getElementById("studentRoll").value;
            var email = document.getElementById("studentEmail").value;

            var student = {
                name: name,
                studentClass: studentClass,
                roll: roll,
                email: email
            };

            students.push(student);

            showStudents();

            studentForm.reset();

        });



        // DISPLAY STUDENTS IN TABLE

        function showStudents() {

            studentTable.innerHTML = "";

            for (var i = 0; i < students.length; i++) {

                studentTable.innerHTML +=

                    "<tr>" +

                    "<td>" + students[i].name + "</td>" +

                    "<td>" + students[i].studentClass + "</td>" +

                    "<td>" + students[i].roll + "</td>" +

                    "<td>" + students[i].email + "</td>" +

                    "<td>" +

                    "<button onclick='editStudent(" + i + ")'>Edit</button>" +

                    "<button onclick='deleteStudent(" + i + ")'>Delete</button>" +

                    "</td>" +

                    "</tr>";

            }

        }



        // DELETE STUDENT

        function deleteStudent(index) {

            students.splice(index, 1);

            showStudents();

            if (editIndex === index) {

                cancelEdit();

            } else if (editIndex > index) {

                editIndex--;

            }

        }



        // EDIT STUDENT

        function editStudent(index) {

            editIndex = index;

            document.getElementById("editName").value =
                students[index].name;

            document.getElementById("editClass").value =
                students[index].studentClass;

            document.getElementById("editRoll").value =
                students[index].roll;

            document.getElementById("editEmail").value =
                students[index].email;

            document.getElementById("editForm").style.display = "block";

        }



        // UPDATE STUDENT

        var editForm = document.getElementById("editForm");

        editForm.addEventListener("submit", function(event) {

            event.preventDefault();

            students[editIndex].name =
                document.getElementById("editName").value;

            students[editIndex].studentClass =
                document.getElementById("editClass").value;

            students[editIndex].roll =
                document.getElementById("editRoll").value;

            students[editIndex].email =
                document.getElementById("editEmail").value;

            showStudents();

            cancelEdit();

        });



        // CANCEL EDIT

        function cancelEdit() {

            document.getElementById("editForm").style.display = "none";

            editForm.reset();

            editIndex = -1;

        }