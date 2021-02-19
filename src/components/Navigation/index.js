import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Layout/Home/Home'
import Courses from '../Layout/Courses/Courses'
import Team from '../Layout/Team/Team'
import Projects from '../Layout/Projects/Projects'
import Events from '../Layout/Events/Events'
import AboutUs from '../Layout/AboutUs/AboutUs'
import Kids from '../Layout/Programmes/Kids'
import Software from '../Layout/Programmes/Software'
import Youth from '../Layout/Programmes/Youth'

const index = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/courses" component={Courses} />
                <Route path="/team" component={Team} />
                <Route path="/projects" component={Projects} />
                <Route path="/events" component={Events} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/kids" component={Kids} />
                <Route path="/software" component={Software} />
                <Route path="/youth" component={Youth} />
            </Switch>
        </BrowserRouter>
    )
}

export default index
