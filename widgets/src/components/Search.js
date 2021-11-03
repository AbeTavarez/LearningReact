import React, { useState } from 'react'

const Search = () => {
    const [term, setTerm] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={e => e.target.value}/>
                </div>
            </div>
        </div>
    )
}

export default Search;
