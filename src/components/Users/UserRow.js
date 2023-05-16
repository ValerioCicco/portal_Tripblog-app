import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDelete } from "../_Hooks/Custom";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";



const UserRow = ({ user, deleteSuccess }) => {

    const base64prefix = "data:image/jpeg;base64,"

    const deleteData = useDelete("http://localhost:8080/users", user.id);

    const [showDelete, setShowDelete] = useState(false);

    const performDelete = () => {
        deleteData(deleteSuccess);
    }

    return (
        <>
            <tr>
                <td className="align-middle">
                    <Link className="btn text-dark mt-1" to={"edit/" + user.id}>
                        <FontAwesomeIcon icon={faPencil} />
                    </Link>
                    <button className="btn text-danger mt-1">
                        <FontAwesomeIcon icon={faTrashCan} onClick={() => {setShowDelete(true)}} />
                    </button>
                </td>
                <td className="align-middle">
                    <div>{user.username}</div>
                </td>
                <td className="align-middle">
                    <div>{user.name}</div>
                </td>
                <td className="align-middle">
                    <div>{user.surname}</div>
                </td>
                <td className="align-middle">
                    <div className="d-flex justify-content-center">
                        <img src={base64prefix + user.userPhoto} style={{height: "300px", width: "250px"}} alt=""/>  
                    </div>
                </td>
            </tr>
            <div className="col-12">
            <Alert className="mt-2" show={showDelete} variant="danger">
                <Alert.Heading>Vuoi eliminare l'utente {user.username} ?</Alert.Heading>
                    <p>L'azione è irreversibile, vuoi procedere comunque ?</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-outline-success me-2" onClick={performDelete}>
                            Conferma
                        </button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => setShowDelete(false)} variant="outline-success">
                            Annulla
                        </button>
                    </div>
            </Alert>
          </div>
        </>
        
    );
}

export default UserRow;