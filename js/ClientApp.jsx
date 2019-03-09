import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'

const App = () =>{
    return (
        <BrowserRouter>
            <div className="app">
            <Switch>
            <Route  exact path='/'component={Landing}/>
            <Route  exact path='/search'component={Search}/>
            <Route  render= {()=>(<h1>404 page not found</h1>)}/>
            </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'));