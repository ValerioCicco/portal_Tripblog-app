import { useEffect, useState } from "react";
import { usePost, usePut } from "../_Hooks/Custom";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const UserForm = ({ data = {} }) => {

    const base64prefix = "data:image/jpeg;base64,"

    const [user, setUser] = useState({
        name: "",
        surname: "",
        username: "",
        password: "",
        userPhoto: ""
    })

    const [imgPreview, setImgPreview] = useState((data.userPhoto ? base64prefix + data.userPhoto : ""))

    const [showPassword, setShowPassword] = useState(false);

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const putData = usePut("http://localhost:8080/users", data.id);
    const postData = usePost("http://localhost:8080/users");

    const navigate = useNavigate();

    useEffect(() => {
        if(data.id > 0) {
            setUser({
                name: data.name,
                surname: data.surname,
                username: data.username,
                password: data.password,
                userPhoto: "" 
            });
        }
    }, [data])

    const getBase64 = async (file) => {

        var reader = new FileReader();
        await reader.readAsDataURL(file);
        reader.onload = function () {  
            setImgPreview(reader.result)
            setUser((prevValues) => {
                return {
                    ...prevValues,
                    "userPhoto":  reader.result.replace(base64prefix, "")       
                }
            });
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }

    const handleChange = (e) => {
        if(e.target.name === 'userPhoto') {
            getBase64(e.target.files[0])
        }
        else {
            setUser((prevValues) => {
                return {
                    ...prevValues,
                    [e.target.name]: e.target.value
                }
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.id > 0) {
            putData(user, submitSuccess)
        }
        else {
            postData(user, submitSuccess)
        }
    }

    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato!");
        setAlertShow(true);
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/users", { replace: true });
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label className="label-form mt-2 mb-2">Nome</label>
                    <input className="form-control" name="name" value={user.name} onChange={handleChange} placeholder="Nome" />
                </div>
                <div className="col-12">
                    <label className="label-form mt-2 mb-2">Cognome</label>
                    <input className="form-control" name="surname" value={user.surname} onChange={handleChange} placeholder="Cognome" />
                </div>
                <div className="col-12">
                    <label className="label-form mt-2 mb-2">Username</label>
                    <input className="form-control" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
                </div>
                <div className="col-12">
                    <label className="label-form mt-2 mb-2">Password</label>
                    <div className="input-group">
                        <input className="form-control" name="password" value={user.password} type={showPassword ? "text" : "password"} onChange={handleChange} placeholder="Password" />
                        <button className="btn btn-outline-secondary" type="button" onClick={handleTogglePassword}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                <div className="col-12">
                    <label className="form-label my-2">Immmagine</label>
                    <input className="form-control form-control-sm" type="file" name="userPhoto" onChange={handleChange} />
                    <img src={imgPreview} style={{height: "300px", marginTop: "10px"}}/>
                </div>
                <div className="col-12">
                <div className="d-flex justify-content-around mt-3">
                    <button className="btn btn-success" type="submit">Salva</button>
                    <Link className="btn btn-outline-danger" to="/users">Annulla</Link>
                </div>
            </div>
            </form>
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
        </>
    );
}

export default UserForm;