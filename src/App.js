import React, { useState } from 'react'
import { SearchForm } from './Components/SearchForm/SearchForm'
import { Header } from './Components/Header/Header'
import { FourOhFour } from './Components/404/404'
import { UserPresentation } from './Components/User/UserPresentation'
import './App.css'

const App = () => {
  const [user, setUser] = useState()
  const [repos, setRepos] = useState()
  const [unknown, setUnknown] = useState()

  const fetchUser = async () => {
    reset()
    const searchInput = document.querySelector('#search-form-input')
    if (searchInput !== '') {
      await fetch(`https://api.github.com/users/${searchInput.value}`)
        .then(async res => {
          res.status === 404 ?
            setUnknown(searchInput.value) :
            setUser(await res.json())
        })
        .catch(err => {
          console.log(err, 'Oops! Something went wrong!')
        })
    }
    searchInput.value = ''
  }

  const fetchRepos = async () => {
    if (!repos) {
      await fetch(`https://api.github.com/users/${user.login}/repos`)
        .then(async repos => {
          setRepos(await repos.json())
        })
        .catch(err => {
          console.log(err, 'Oops! Something went wrong!')
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
    fetchRepos,
    reset
  }

  return (
    <div className="App">
      <Header />
      <section className="App-main">
        {unknown ?
          <FourOhFour unknown={unknown} /> : null
        }
        {user ? (
          <UserPresentation {...userProps} />
        ) : null
        }
        <SearchForm fetchUser={fetchUser} />
      </section>
    </div>
  )
}

export default App
