import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Landing extends Component {
  render() {
    return (
    <div className='app'>
            <div className="landing">
            <h1>WatchIt</h1>
            <input type="text" placeholder='Search'/>
            <Link to='/search'>or Browse all</Link>
            </div>
        </div>
    )
  }
}

export default Landing
