import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
import Quotation from '../pages/Quotation/Quotation'
import ComingSoon from '../pages/ComingSoon/ComingSoon'
import NotFound from '../pages/NotFound/NotFound'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/quotation' component={Quotation} />
                <Route exact path='/coming-soon' component={ComingSoon} />
                <Route exact path='/404' component={NotFound} />
                <Route path ='/access'><Redirect to='/coming-soon'/></Route>
                <Route path ='/create-account'><Redirect to='/coming-soon'/></Route>
                <Route path ='/'><Redirect to='/404'/></Route>
            </Switch>
        </Router>
    )
}

export default Routes