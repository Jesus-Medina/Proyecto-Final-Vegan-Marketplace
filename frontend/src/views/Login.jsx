import { useState } from "react";
import TitleComponent from "../components/login-components/TitleComponent";
import InputComponent from "../components/login-components/InputComponent";
import ButtonComponent from "../components/login-components/ButtonComponent";
import LinksComponent from "../components/login-components/LinksComponent";
import "../styles/loginContainer.css"

function Login() {

    const [user, setUser] = useState("")
    const [userPassword, setUserPassword] = useState("")

    return (
        <div className="login">
            <div className="login-container p-4 rounded">
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