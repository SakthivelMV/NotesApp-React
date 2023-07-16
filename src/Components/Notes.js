import { MdDelete } from "react-icons/md";
function Notes({id,text,date,handleDelte}) {
    return (
        <div className="notes">
            <span>{text}</span>
            <div className="notes-footer">
                <small>{date}</small>
                <MdDelete onClick={()=>handleDelte(id)}
                className="del"
                size='1.3em'
                />
            </div>
        </div>
    )
}
export default Notes