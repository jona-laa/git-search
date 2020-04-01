import React from 'react';
import { SearchButton } from './SearchButton/SearchButton'
import { SearchInput } from './SearchInput/SearchInput'
import './SearchForm.css';

export const SearchForm = ({ fetchUser }) => {
    const preventReload = (e) => {
        e.preventDefault();
    };
    return (
        <div className="search-container">
            <form id="search-form" onSubmit={preventReload}>
                <SearchInput />
                <SearchButton fetchUser={fetchUser} />
            </form>
        </div>
    );
};