import React, { useState } from 'react';
import { SearchForm } from './Components/SearchForm/SearchForm'
import { Header } from './Components/Header/Header'
import { UserBio } from './Components/User/UserBio/UserBio'
import { UserRepos } from './Components/User/UserRepos/UserRepos'
import unknownUser from './doge.png'
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState();
  const [unknown, setUnknown] = useState();

  const fetchUser = async () => {
    setUnknown(null)
    const searchInput = document.querySelector('#search-form-input')
    if (searchInput !== '') {
      await fetch(`https://api.github.com/users/${searchInput.value}`)
        .then(async res => {
          res.status === 404 ?
            setUnknown(searchInput.value) :
            setUser(await res.json())
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
    setUnknown(null)
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
        {unknown ?
          <div className="four-oh-four">
            <img src={unknownUser} /> <br />
            <span>No user with name "{unknown}" was found</span>
          </div> : null
        }
        {user ? (
          <div className="user-presentation">
            <UserBio user={user} />
            <UserRepos {...userProps} />
            <button className="button" onClick={reset}>Reset</button>
          </div>
          ) : null
        }
        <SearchForm fetchUser={fetchUser} />
      </section>
    </div>
  );
}

export default App;
