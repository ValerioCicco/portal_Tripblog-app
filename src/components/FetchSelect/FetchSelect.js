import { useGet } from "../_Hooks/Custom";




const FetchSelect = ({className, name, value, onChange, url}) => {

    const {data} = useGet(url);

    if(data) {
        return (
            <select className={className} name={name} value={value} onChange={onChange}>
                <option value={0}>-- Seleziona --</option>
                {data.map(item => <option key={item.id} value={item.id}>{item.name} {item.surname}</option>)}
            </select>
        );
    }

    return(
        <select className={className}>
            <option value={0}>-- Seleziona --</option>
        </select>
    );
}

export default FetchSelect;