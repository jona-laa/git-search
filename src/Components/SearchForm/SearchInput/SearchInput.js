import React from 'react'
import './SearchInput.css'

export const SearchInput = () => {
    return (
        <input
            type="text"
            id="search-form-input"
            className="text-input"
            placeholder="Search Username"
            autoFocus
            required
        ></input>
    )
}
