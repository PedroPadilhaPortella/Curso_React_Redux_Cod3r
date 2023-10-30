import React from 'react'
import { IndexRoute, Redirect, Route, Router, hashHistory } from 'react-router'
import BillingCycle from '../billingCycle/BillingCycle'
import Dashboard from '../dashboard/Dashboard'
import AuthOrApp from './AuthOrApp'

export default (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='billingCycles' component={BillingCycle} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)