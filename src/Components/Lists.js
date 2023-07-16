import Notes from "./Notes"
import Add from "./Add"
function Lists({notes,handleAddNotes,handleDelte}){
    return(
        <div className="lists">
            {notes.map((note)=>(
            <Notes id={note.id} text={note.text} date={note.date} handleDelte={handleDelte}/>
            ))}
            <Add handleAddNotes={handleAddNotes}/>
        </div>
    )
}
export default Lists