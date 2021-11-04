import React from 'react'
import MainPage from './pages/main-page/MainPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'
const FriendsPage = React.lazy(() => import('./pages/friends-page/FriendsPage'))

function App () {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Header />
        <React.Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/mynetwork' component={FriendsPage} />
            <Route></Route>
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
