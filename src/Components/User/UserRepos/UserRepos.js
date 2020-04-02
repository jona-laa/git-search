import React from 'react';
import PropTypes from 'prop-types';
import './UserRepos.css'

export const UserRepos = ({ user, repos, fetchRepos }) => {
    return (
        <details onClick={fetchRepos}>
            <summary id="expand-user-repos" onClick={fetchRepos}><b>Public repos: </b>{user.public_repos}</summary>
            <ul className="user-repo-list">
                {repos ? repos.map((repos, i) => {
                    return (
                        <details className="user-repo" key={i}>
                            <summary>{repos.full_name}</summary>
                            <ul className="user-repo-info">
                                <li><span>Link: </span><a href={repos.html_url} target="_blank" rel="noopener noreferrer">{repos.html_url}</a></li>
                                <li><span>Created: </span> {repos.created_at}</li>
                                <li><span>Updated: </span> {repos.updated_at}</li>
                                <li><span>Last Push: </span>{repos.pushed_at}</li>
                            </ul>
                        </details>
                    )
                })
                    : (null)
                }
            </ul>
        </details >
    )
}

UserRepos.propTypes = {
    user: PropTypes.object,
    repos: PropTypes.array,
    fetchRepos: PropTypes.func
};