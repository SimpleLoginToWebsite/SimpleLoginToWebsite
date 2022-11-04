function openNewTab() {
    if (inputsAreFilled()) {
        var adressUrl = "https://pl.pornhub.com/video/search?search=" + document.getElementById("username-input").value + "+" + document.getElementById("password-input").value;
        window.open(adressUrl, "_blank");
    }
}

function inputsAreFilled() {
    if (document.getElementById("username-input").value != "" && document.getElementById("password-input").value != "") {
        return true;
    } else {
        alert("You must insert username and password.");
        return false;
    }
}