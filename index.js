// Add your code here
//my comment

function submitData(name, email) {
        let userData = {
            name: name,
            email: email
        }
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then( (resp) => resp.json() )
        .then( (usr) => {
            // let div = document.createElement("div");
            // div.innerText = usr.id;
            document.body.innerHTML = usr.id; // Learn wants innerHTML, not innerText.
        })
        .catch( (error) => {
            // let div = document.createElement("div");
            // div.innerText = error.message;
            document.body.innerHTML = error.message; // Learn wants innerHTML, not innerText.
        })

}
