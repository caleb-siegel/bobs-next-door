import React from "react"

function Search({ searchTerm, handleSearch}) {

    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={handleSearch} />
        </div>
    );
}

export default Search;