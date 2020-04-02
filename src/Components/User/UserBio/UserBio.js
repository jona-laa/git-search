import React from 'react'
import PropTypes from 'prop-types';
import './UserBio.css'

export const UserBio = ({ user }) => {
    return (
        <React.Fragment>
            <h3 className="user-git">{user.login}</h3>
            <img className="user-image" src={`${user.html_url}.png`} alt={`${user.name}'s avatar`} />
            <ul className="user-bio">
                <li><span>Name: </span><span className="user-bio-data">{user.name ? user.name : '-'}</span></li>
                <li><span>Location: </span><span className="user-bio-data">{user.location ? user.location : '-'}</span></li>
                <li><span>About: </span><span className="user-bio-data">{user.bio ? user.bio : '-'}</span></li>
                <li><span>GitHub: </span><span className="user-bio-data"><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></span></li>
            </ul>
        </React.Fragment>
    )
}

UserBio.propTypes = {
    user: PropTypes.object,
};