import React from "react"

function ShowUser() {


    function Login(event) {
        event.preventDefault()

        const user = localStorage.getItem("user")
        const info = document.querySelector("h1")

        if (user) {
            info.innerHTML = `hello ${user}`
        } else {
            info.innerHTML = `log in first`
        }

        let input = document.querySelector("input")

        let userName = input.value;
        localStorage.setItem("user", userName)
        ShowUser()
    }

    function Logout() {
        localStorage.removeItem("user")
        ShowUser()
    }




    return (
        <>
            <div className="container">
                <form action="">
                    <label htmlFor="">First Name:</label>
                    <input type="text" />
                    <button onClick={Login} className="btn btn-success">login</button>
                    <button onClick={Logout} className="btn btn-dark">Logout</button>
                </form>
                <div className="container">
                    <h1></h1>
                </div>
            </div>
        </>
    )


    ShowUser()

}


export default ShowUser