var password = "HTNHBV_Sangeetham-101";

var s ="";

while (s!= password) {
    s=prompt("Authorized users only");
    if (s== password) {
        window.location.href="table.html"; //page to redirect if password entered is correct
    }
    else {
        alert("Incorrect password-Try again");
    }
}