import TripForm from "./TripForm";



const NewTrip = () => {

    return (
        <>
            <div className="m-2 p-2 border">
                <h5>Nuovo Viaggio</h5>
                <TripForm type="add"/>
            </div>
        </> 
    );
}

export default NewTrip;