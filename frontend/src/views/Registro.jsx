import { useState } from "react";
import TitleComponent from "../components/login-register-components/TitleComponent";
import InputComponent from "../components/register-components/InputComponent";
import ButtonComponent from "../components/register-components/ButtonComponent";
import LinksComponent from "../components/login-register-components/LinksComponent";
import "../styles/registerCard.css"

function Register() {

    const [user, setUser] = useState("")
    const [userPassword, setUserPassword] = useState("")

    return (
        <div className="register">
            <div className="register-container p-4 rounded">
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

export default Register;