import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './containers/Root'
import Home from './containers/pages/HomePage'
import Item from './containers/pages/ItemPage'
import Design from './containers/pages/DesignPage'
import About from './containers/pages/AboutPage'
import Contact from './containers/pages/ContactPage'
import NotFound from './containers/pages/NotFound'

export default (
  <Route path='/' component={Root}>
    <IndexRoute path='/home' component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/home(/:year)(/:id)' component={Item} />
    <Route path='/design' component={Design} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='*' component={NotFound} />
  </Route>
)
