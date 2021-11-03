import MainPage from './pages/main-page/MainPage'
import FriendsPage from './pages/friends-page/FriendsPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'
import React from 'react'
const FriendsPage1 = React.lazy(() => import('./pages/friends-page/FriendsPage'))

function App () {
  return (
      <BrowserRouter>
        <Header />
        <React.Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/mynetwork' component={FriendsPage1}/>
          <Route></Route>
        </Switch>
        </React.Suspense>
      </BrowserRouter>
  )
}

export default App
