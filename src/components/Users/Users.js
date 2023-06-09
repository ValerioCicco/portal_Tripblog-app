import { Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useGet } from "../_Hooks/Custom";
import UserRow from "./UserRow";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";





const Users = () => {

    const {data, error, isLoading, mutate} = useGet("http://localhost:8080/users");

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Eliminazione completata!");
        setAlertShow(true);
    }

    if(data) {
        return (
            <div className="container mt-3">
                <h3>I nostri utenti</h3>
                <Link className="btn btn-sm btn-outline-success mt-3 mb-4" to="new">Nuovo Utente</Link>
                <Outlet context={{ mutate }} />
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map ((user) => (
                            <UserRow key={user.id} user={user} deleteSuccess={deleteSuccess} />
                        ))}
                    </tbody>
                </Table>
                <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
            </div>
        )
    } else if(isLoading) {
        return <Loader />
    } else if (error) {
        return <div>Errore di caricamento</div>;
    }
}

export default Users;