import React from 'react'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import {Route ,Switch } from 'react-router-dom'
import Navbar from './component/Navbar';
 function Apps() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" component={Rooms} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route component={Error} />
            </Switch>
            
        </>
    )
}
export default Apps;