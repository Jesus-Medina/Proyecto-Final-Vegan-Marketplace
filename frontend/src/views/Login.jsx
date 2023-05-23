import { useState } from "react";
import TitleComponent from "../components/login-register-components/TitleComponent";
import InputComponent from "../components/login-register-components/InputComponent";
import ButtonComponent from "../components/login-register-components/ButtonComponent";
import LinksComponent from "../components/login-register-components/LinksComponent";
import "../styles/loginContainer.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import { useContext } from "react";
import Swal from "sweetalert2";

function Login() {
  const [user, setUser] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const { setUsuario } = useContext(Context);

  const login = async () => {
    if (!userPassword || !user)
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Email y password obligatorios",
        showConfirmButton: true,
        timer: 2000,
      });
    const urlServer = "http://localhost:4000";
    const endpoint = "/login";
    try {
      const usuario = {
        email: user,
        password: userPassword,
      };
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      localStorage.setItem("token", token);
      localStorage.setItem("email", user);

      setUsuario(usuario);
      navigate("/");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Algo salió mal...",
        showConfirmButton: true,
        timer: 2000,
      });
    }
  };

  return (
    <div className="login">
      <div className="login-container p-4">
        <TitleComponent />
        <InputComponent setUser={setUser} setUserPassword={setUserPassword} />
        <button
          onClick={login}
          className="px-5 py-2 mb-2 mt-3 rounded login-button"
        >
          Login
        </button>
      </div>
      <LinksComponent />
    </div>
  );
}

export default Login;
