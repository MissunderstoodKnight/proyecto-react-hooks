import React from "react"
import "./App.css"
import Home from './Paths/Home'
import Detail from './Paths/Detail'
import SearchResults from './Paths/SearchResults'

import { Link, Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
            <img className="App-logo" alt='' src='/logo.svg' />
        </Link>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path='/search/:keyword'
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  )
}
