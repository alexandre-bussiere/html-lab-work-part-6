function userForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let premiummembership = document.getElementById("premiummembership");
    let standardmembership = document.getElementById("standardMembership");
    var membership = document.querySelector('input[name="membership"]:checked').value;
    // Put the user's information into the HTML
    var userInfo = "First Name: " + firstName + "<br>";
    userInfo += "Last Name: " + lastName + "<br>";
    userInfo += "Email Address: " + email + "<br>";
    userInfo += "Address: " + address + "<br>";
    userInfo += "City: " + city + "<br>";
    userInfo += "Province: " + province + "<br>";
    userInfo += "Membership Type: " + membership;
    console.log("Info : " + userInfo);
    // Display the user's information below the form
    document.getElementById('userInformation').outerHTML = userInfo;
}

function myExcelFuns() {
    let numberStr = document.getElementById("num-input").value;

    document.getElementById('result').outerHTML = "Please enter a number";
}



if (document.getElementById('calculate') != null) {
    document.getElementById('calculate').addEventListener('click', function (envent) {
        myExcelFuns();
    });
}
if (document.getElementById('userForm') != null) {
    document.getElementById('userForm').addEventListener('click', function (envent) {
        userForm();
    });
}

