//<Route path="/dashboard" component={Dashboard} />
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Dashboard from './dashboard/dashboard'
import NotFound from '../utils/NotFound/NotFound'

import { useSelector } from 'react-redux'

function Admin() {
    const auth = useSelector(state => state.auth)
    const { isLogged, isAdmin } = auth
    return (
        <section>
            <Switch>
                <Route path="/dashboard" component={ Dashboard } exact />
                <Route component={NotFound}/>
            </Switch>
        </section>
    )
}

export default Admin
