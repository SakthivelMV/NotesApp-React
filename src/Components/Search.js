import { MdSearch } from "react-icons/md"

function Search({handleSearch}){
    return(
        <div className="search">
            <MdSearch className="search-icon" size='1.3em'/>
            <input onChange={(event)=>handleSearch(event.target.value)}
            type="text" placeholder="search here"/>
            </div>
    )
}
export default Search