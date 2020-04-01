import React, { useState } from 'react';
import { SearchForm } from './Components/SearchForm/SearchForm'
import { Header } from './Components/Header/Header'
import { UserBio } from './Components/User/UserBio/UserBio'
import { UserRepos } from './Components/User/UserRepos/UserRepos'
import unknown from './doge.png'
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState();
  const [err, setErr] = useState();

  const fetchUser = async () => {
    setErr(null)
    const searchInput = document.querySelector('#search-form-input')
    if (searchInput !== '') {
      await fetch(`https://api.github.com/users/${searchInput.value}`)
        .then(async user => {
          user.status !== 404 ?
            setUser(await user.json()) :
            setErr(searchInput.value)
        })
        .catch(err => {
          console.log(err, 'Oops! Something went wrong!');
        })
    }
    searchInput.value = ''
  }

  const fetchRepos = async (e) => {
    if (e.target.id === 'expand-user-repos' && !repos) {
      await fetch(`https://api.github.com/users/${user.login}/repos`)
        .then(async repos => {
          setRepos(await repos.json())
        })
        .catch(err => {
          console.log(err, 'Oops! Something went wrong!');
        })
    }
  }

  const reset = () => {
    setUser(null)
    setRepos(null)
    setErr(null)
  }

  const userProps = {
    user,
    repos,
    fetchRepos
  }

  return (
    <div className="App">
      <Header />
      <section className="App-main">
        {user ? <button className="button" onClick={reset}>New Search</button> : null}
        {err ? <div className="four-oh-four"><img src={unknown} /> <br/><span>No user with name "{err}" was found</span></div> : null}
        {user ? (
          <div className="user-presentation">
            <UserBio user={user} />
            <UserRepos {...userProps} />
          </div>) : (
            <SearchForm fetchUser={fetchUser} />
          )}
      </section>
    </div>
  );
}

export default App;
