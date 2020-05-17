import React from 'react'

function SearchBar() {
    return(
        <article>
            <form className="SearchBar">
                <label>Search</label>
                <div className="Flex-Box">
                <input 
                    type="text"
                    placeholder="Search for datasets"
                    />
                <button>Submit</button>
                </div>
            </form>
        </article>
    )
}

export default SearchBar;