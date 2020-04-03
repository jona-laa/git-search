import React from 'react'
import PropTypes from 'prop-types'
import unknownUser from './doge.png'
import './404.css'

export const FourOhFour = ({ unknown }) => {
    return (
        <div className="four-oh-four">
            <img src={unknownUser} alt="Yes, this is doge. The unknown user." /> <br />
            <span>No user with name &quot;{unknown}&quot; was found</span>
        </div>
    )
}

FourOhFour.propTypes = {
    unknown: PropTypes.string,
};
