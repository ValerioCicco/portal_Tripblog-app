import { useParams } from "react-router-dom";
import { useGet } from "../_Hooks/Custom";
import UserForm from "./UserForm";




const EditUser = () => {

    const { id } = useParams();

    const {data, error} = useGet("http://localhost:8080/users", id);

    if(data) {
        return (
            <div className="container">
                <h5>Modifica Utente</h5>
                <UserForm data={data} />
            </div>
        );
    }
    
}

export default EditUser;