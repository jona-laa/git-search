import React from 'react'
import './UserBio.css'

export const UserBio = ({ user }) => {
    return (
        <React.Fragment>
            <h3 className="user-git">{user.login}</h3>
            <img className="user-image" src={`${user.html_url}.png`} />
            <ul className="user-bio">
                <li><span>Name: </span><span className="user-bio-data">{user.name}</span></li>
                <li><span>Location: </span><span className="user-bio-data">{user.location}</span></li>
                <li><span>About: </span><span className="user-bio-data">{user.bio}</span></li>
                <li><span>GitHub: </span><span className="user-bio-data"><a href={user.html_url} target="_blank">{user.html_url}</a></span></li>
            </ul>
        </React.Fragment>
    )
}
