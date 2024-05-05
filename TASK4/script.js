document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        document.getElementById("loginForm").reset();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("securedPage").classList.remove("hidden");
    } else {
        alert("Invalid username or password.");
    }
});

document.getElementById("logoutButton").addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("securedPage").classList.add("hidden");
    document.getElementById("loginForm").style.display = "block";
});
