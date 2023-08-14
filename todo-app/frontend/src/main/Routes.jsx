import React from 'react'
import { Redirect, Route, Router, hashHistory } from 'react-router'
import About from '../about/about'
import Todo from '../todo/todo'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)