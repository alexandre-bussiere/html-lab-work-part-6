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
    document.getElementById('userInformation').innerHTML = userInfo;
}

function myExcelFuns() {
    let numberStr = document.getElementById("num-input").value;
    let methode_to_calc = document.querySelector('input[name="methode_to_calc"]:checked').value;
    let result = document.getElementById("result");

    if (numberStr === null || numberStr.trim() === "") {
        alert("Please type your numbers.");
        result.textContent = "Please type your numbers.";
    } else {
        let numbersText = numberStr.split(" ");
        let numbers = [];
        console.log(numbersText);
        for (let i = 0; i < numbersText.length; i++) {
            numbers[i] = parseInt(numbersText[i]);
            if (isNaN(numbers[i])) {
                alert("Please only type number.");
                result.textContent = "Please only type number.";
                return;
            }
        }

        let resultNum;
        switch (methode_to_calc) {
            case 'autoSum':
                resultNum = autoSum(numbers);
                break;
            case 'average':
                resultNum = average(numbers);
                break;
            case 'max':
                resultNum = max(numbers);
                break;
            case 'min':
                resultNum = min(numbers);
                break;
            default:
                result.textContent = "Please choose an operation.";
        }
        result.textContent = resultNum;
    }
}

function autoSum(list) {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        result += list[i];
    }
    return result;
}

function average(list) {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        result += list[i];
    }
    result = result / list.length;
    return result;
}

function max(list) {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        if (result < list[i]) {
            result = list[i];
        }
    }
    return result;
}

function min(list) {
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
        if (result > list[i]) {
            result = list[i];
        }
    }
    return result;
}


function toggleDarkMode(darkMode) {
    const body = document.body;

    if (darkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}


if (document.getElementById('excel-form') != null) {
    document.getElementById('excel-form').addEventListener('submit', function (envent) {
        event.preventDefault(); // Pour empêcher le formulaire de se soumettre
        myExcelFuns();
    });
}
if (document.getElementById('index-form') != null) {
    document.getElementById('index-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Pour empêcher le formulaire de se soumettre
        userForm();
    });
}
