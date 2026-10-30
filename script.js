let heading=document.getElementById("main-heading");
heading.textContent="WELCOME TO FRESH CUTS!";
function changeHeading() {
    document.getElementById("main-heading").textContent =
        "THANK YOU FOR VISITING FRESH CUTS!";
}
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}
function confirmBooking() {
    return confirm("Would you like to book an appointment with Fresh Cuts?");
}