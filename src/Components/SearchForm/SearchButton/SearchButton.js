import React from 'react'
import PropTypes from 'prop-types'
import './SearchButton.css'

export const SearchButton = ({ fetchUser }) => {
    return (
        <button
            type="submit"
            className="button"
            id="search-form-submit"
            onClick={fetchUser}
        >
            Search
        </button>
    )
}

SearchButton.propTypes = {
    fetchUser: PropTypes.func,
}
