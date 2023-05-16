import UserForm from "./UserForm";


const NewUser = () => {
    return (
        <>
            <div className="m-2 p-2 border">
                <h5>Nuovo Utente</h5>
                <UserForm />
            </div>
        </> 
    );
}

export default NewUser;