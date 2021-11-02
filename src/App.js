import UserCard from './components/user-card/UserCard'
import ListUser from './components/list-user/ListUser'
import MainPage from './pages/main-page/MainPage'
import FriendsPage from './pages/friends-page/FriendsPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

function App () {
  return (
    <div className='app-container'>
      

      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/'>
            <MainPage/>
          </Route>
          <Route path='/mynetwork'>
            <FriendsPage />
          </Route>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
