import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDelete } from "../_Hooks/Custom";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";



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
                    <button className="btn text-danger mt-1" onClick={performDelete}>
                        <FontAwesomeIcon icon={faTrashCan} />
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
                        <Image roundedCircle src={user.userPhoto ? base64prefix + user.userPhoto : "https://tse4.mm.bing.net/th?id=OIP.tRKx_ZxX6-p2Ug326m5vBQHaHa&pid=Api&P=0&h=180"} style={{height: "250px", width: "250px", boxShadow: "0px 0px 5px black"}} alt=""/>  
                    </div>
                </td>
            </tr>
        </>
        
    );
}

export default UserRow;