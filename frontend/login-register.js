
const RegisterUser = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password1').value
    const confirmPassword = document.getElementById('password2').value

    if (password === confirmPassword) {
        const data = {
            name: name,
            email: email,
            password: password
        };
        fetch('http://localhost:3000/insertdata/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((result) => result.json())
            .then(result => alert(result.msg))
            .catch(err => alert(err));
    }
    else {
        alert("Password mismatch")
    }
}
const LoginUser = () => {
    console.log("Called Login")
    const email = document.getElementById('LoginEmail').value
    const password = document.getElementById('LoginPassword').value
    const data = {
        email: email,
        password: password
    };
    fetch(`http://localhost:3000/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-Type": "application/json"
        }
    })
        .then((data) => data.json())
        .then((data) => {
            alert("Login Successfull", data?.name)
            window.location = 'http://127.0.0.1:5500/frontend/index.html'
        }).catch(err => console.log("This is Err :", err))
}

// Register Btn
document.getElementById("registerBtn").addEventListener("click", function (event) {
    event.preventDefault();
    RegisterUser();
});

// Login Btn
document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();
    LoginUser();
});