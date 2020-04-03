import React from 'react'
import PropTypes from 'prop-types'
import { UserBio } from './UserBio/UserBio'
import { UserRepos } from './UserRepos/UserRepos'
import './UserPresentation.css'

export const UserPresentation = (props) => {
    return (
        <div className="user-presentation">
            <UserBio user={props.user} />
            <UserRepos {...props} />
            <button className="button" onClick={props.reset}>Reset</button>
        </div>
    )
}

UserPresentation.propTypes = {
    props: PropTypes.object,
    user: PropTypes.object,
    reset: PropTypes.func
}
