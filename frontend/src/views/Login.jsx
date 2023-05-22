import { useState } from "react";
import TitleComponent from "../components/login-register-components/TitleComponent";
import InputComponent from "../components/login-register-components/InputComponent";
import ButtonComponent from "../components/login-register-components/ButtonComponent";
import LinksComponent from "../components/login-register-components/LinksComponent";
import "../styles/loginContainer.css"

function Login() {

    const [user, setUser] = useState("")
    const [userPassword, setUserPassword] = useState("")

    return (
        <div className="login">
            <div className="login-container p-4">
                <TitleComponent />
                <InputComponent
                    setUser={setUser}
                    setUserPassword={setUserPassword}
                />
                <ButtonComponent />
            </div>
            <LinksComponent />
        </div>
    );
}

export default Login;