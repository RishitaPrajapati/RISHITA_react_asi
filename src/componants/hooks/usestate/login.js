import { logDOM } from "@testing-library/react";
import { useState } from "react";

function Login() {

    const [login, setLogin] = useState(false)
    function auth() {
        setLogin(!login)
    }
    return (
        <>
            <button className={`btn ${login ? 'btn-danger' : 'btn-primary'}`} onClick={auth}>
                {login ? 'logout' : 'login'}
            </button>
        </>
    )
}

export default Login