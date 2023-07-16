import { useState } from "react"

function Add({handleAddNotes}){
    const[ntext,setnText] = useState('')
    const charLimit = 50;

    const handleChange=(event)=>{
        if(charLimit-event.target.value.length>=0){
            setnText(event.target.value)

        }
    };
    const handleSaveClick=()=>{
        if(ntext.trim().length>0){
            handleAddNotes(ntext);
            setnText('');
}
    }
    return(
        <div className="notes add">
            <textarea rows='8'
            cols='10'
            placeholder='Add new note'
            value={ntext}
            onChange={handleChange}
            ></textarea>
            <div className="notes-footer">
                <small>
                    {charLimit-ntext.length} letters Remaining
                </small>
                <button className="save" onClick={handleSaveClick}>Add Note</button>
            </div>
        </div>
    )
}
export default Add