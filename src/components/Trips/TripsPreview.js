import { useGet } from "../_Hooks/Custom";
import { Link, Outlet } from "react-router-dom";
import TripsItem from "./TripsItem";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";

const TripsPreview = () => {
  const { data, error, isLoading, mutate } = useGet("http://localhost:8080/trips");

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


  if (data) {
    return (
      <div className="container">
        <h3>Elenco Viaggi</h3>
        <Link className="btn btn-sm btn-outline-success mt-2 mb-4" to="new">Crea nuovo viaggio</Link>
        <Outlet context={{ mutate }} />
        <div className="row">
          {data.map((trip) => (
            <div key={trip.id} className="col-12 col-md-6 col-lg-4">
              <TripsItem key={trip.id} trip={trip} deleteSuccess={deleteSuccess}/>
            </div>
          ))}
        </div>
        <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
      </div>
    );
  } else if (isLoading) {
    <Loader />
  } else if (error) {
    <div>Errore di caricamento</div>;
  }
};

export default TripsPreview;
