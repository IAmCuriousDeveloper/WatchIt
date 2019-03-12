import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../data.json'

const App = () =>{
    return (
        <BrowserRouter>
            <div className="app">
            <Switch>
            <Route  exact path='/'component={Landing}/>
            <Route  exact path='/search'component={ ()=> (<Search shows= {preload} {...props}/>)}/>
            <Route  path='/details/:id' component={(props) => {
                const selectedShow = preload.shows.find((show)=>show.imdbID === props.match.params.id);
                return <Details show={selectedShow} {...props}/>
            }}/>
            <Route  render= {()=>(<h1>404 page not found</h1>)}/>
            </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App
