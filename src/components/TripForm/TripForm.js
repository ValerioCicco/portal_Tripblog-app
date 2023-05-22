import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePost, usePut } from "../_Hooks/Custom";
import FetchSelect from "../FetchSelect/FetchSelect";
import axios from "axios";
import Alert from "../Alert/Alert";



const TripForm = ({data = {}, type}) => {

    const base64prefix = "data:image/jpeg;base64,"

    const [trip, setTrip] = useState({
        destination: "",
        continent: "",
        description: "",
        departureDate: "",
        arrivalDate: "",
        idUser: 0,
    })

    const [photos, setPhotos] = useState([])
    const [previews, setPreviews] = useState([])

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const putData = usePut("http://localhost:8080/trips", data.id);
    const postData = usePost("http://localhost:8080/trips");

    const navigate = useNavigate();

    useEffect(() => {
        if(data.id > 0) {
            setTrip({
                destination: data.destination,
                continent: data.continent,
                description: data.description,
                departureDate: data.departureDate ? data.departureDate : "",
                arrivalDate: data.arrivalDate ? data.arrivalDate : "",
                idUser: data.idUser
            });
        }
    }, [data])

    const getBase64 = async (file) => {

        var reader = new FileReader();   
        await reader.readAsDataURL(file);   
        reader.onload = function () {
            setPreviews((prevValues) => {
                return [
                    ...prevValues,
                    reader.result.replace(base64prefix, "")
                ]
            });
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }

    const handleChange = (e) => {
        setTrip((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    }

    const addPhoto = (e) => {
        if(e.target.files[0]) {
            setPhotos((prevValues) => {
                return [
                    ...prevValues,
                    e.target.files[0]
                ]
            });
            getBase64(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.id > 0) {
            putData(trip, submitSuccess);
        }
        else {
            postData(trip, submitSuccess);
        }
    }

    const submitSuccess = (e) => {
        if(photos.length > 0) {
            let formData = new FormData();
            photos.forEach((e, i) => {
            formData.append("photo", e)
            })
            axios.post("http://localhost:8080/trips/" + e.id + "/photos", formData).then(result => {})

        }
        
        setAlertMessage("Salvataggio completato!");
        setAlertShow(true);
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/trips", {replace: true});
    }

    return (
        <>
        <form className="row">
            <div className="col-12">
                <label className="form-label">Città</label>
                <input className="form-control-sm mt-2 mb-2 mx-2" name="destination" value={trip.destination} onChange={handleChange} />
            </div>
            <div className="col-4">
                <label className="form-label">Utente</label>
                <FetchSelect className="form-control form-control-sm" name="idUser" value={trip.idUser} onChange={handleChange} url={"http://localhost:8080/users"} />
            </div>
            <div className="col-12">
                <label className="from-label">Continente</label>
                <input className="form-control-sm mt-3 mb-3 mx-2" name="continent" value={trip.continent} onChange={handleChange} />
            </div>
            <div className="col-4">
                <label className="form-label">Data Partenza</label>
                <input className="form-control form-control-sm" type="date" name="departureDate" value={trip.departureDate} onChange={handleChange} />
            </div>
            <div className="col-4">
                <label className="form-label">Data Ritorno</label>
                <input className="form-control form-control-sm" type="date" name="arrivalDate" value={trip.arrivalDate} onChange={handleChange} />
            </div>
            {type === "add" && <div className="col-12">
                <label className="form-label mt-2">Immagini</label>
                <input className="form-control form-control-sm" type="file" onChange={addPhoto}/>
            </div>}
            {previews && previews.map(preview => <img alt="" src={base64prefix + preview} style={{width: "300px", height: "200px", marginTop: "10px"}} />)}
            <div className="col-12">
                <label className="form-label mt-2">Descrizione viaggio</label>
                <textarea className="form-control" name="description" value={trip.description} rows="10" onChange={handleChange}></textarea>
            </div>
            <div className="col-12">
                <div className="d-flex justify-content-around mt-3">
                    <button className="btn btn-success" onClick={handleSubmit}>Salva</button>
                    <Link className="btn btn-outline-danger" to="/trips">Annulla</Link>
                </div>
            </div>
        </form>
        <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
        </>
    );
}

export default TripForm;