import { useParams } from "react-router-dom";
import { useGet } from "../_Hooks/Custom";
import TripForm from "./TripForm";




const EditTrip = () => {

    const { id } = useParams();

    const {data, error} = useGet("http://localhost:8080/trips", id);

    if(data) {
        return (
            <div className="container">
                <h5>Modifica Viaggio</h5>
                <TripForm data={data} type="edit"/>
            </div>
        )
    }

}

export default EditTrip;