import React from 'react'
import PropTypes from 'prop-types'
import { SearchButton } from './SearchButton/SearchButton'
import { SearchInput } from './SearchInput/SearchInput'
import './SearchForm.css'

export const SearchForm = ({ fetchUser }) => {

    const preventReload = (e) => {
        e.preventDefault()
    }

    return (
        <div className="search-container">
            <form id="search-form" onSubmit={preventReload}>
                <SearchInput />
                <SearchButton fetchUser={fetchUser} />
            </form>
        </div>
    )
}

SearchForm.propTypes = {
    fetchUser: PropTypes.func,
}