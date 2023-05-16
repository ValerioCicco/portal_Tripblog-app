import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGet, useDelete } from "../_Hooks/Custom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";


const TripsItem = ({ trip, deleteSuccess }) => {

  const [showDelete, setShowDelete] = useState(false);

  const { data: user, error: userError } = useGet("http://localhost:8080/users", trip.idUser);

  const deleteData = useDelete("http://localhost:8080/trips", trip.id);

  const performDelete = () => {
    deleteData(deleteSuccess);
  }

  if(user) {
    return (
      <>
      <Card style={{ width: "18rem", marginBottom: "40px" }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1056528/pexels-photo-1056528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/100px180" />
        <Card.Body>
          <Card.Title>{trip.destination}</Card.Title>
          <Card.Text>
            Il viaggio in <b>{trip.continent}</b> raccontato da: {user.name} {user.surname}
          </Card.Text>
          <Link to={"/trips/" + trip.id}>
            <Button variant="primary">Scopri di più...</Button>
          </Link>
          <Link className="btn text-dark mx-3" to={"edit/" + trip.id}>
            <FontAwesomeIcon icon={faPencil} />
          </Link>
          <button className="btn text-danger" onClick={() => {setShowDelete(true)}}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <div className="col-12">
            <Alert className="mt-2" show={showDelete} variant="danger">
              <Alert.Heading>Vuoi eliminare il viaggio a {trip.destination} ?</Alert.Heading>
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
        </Card.Body>
      </Card>
      </>
    );
  }
};

export default TripsItem;
