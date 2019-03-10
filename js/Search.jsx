import React from 'react'
import preload from '../data.json' 
import Showcard from './ShowCard'

const Search = () => (
    <div className='search'>
    <div>
    {preload.shows.map((show)=>( 
    <Showcard key ={show.imdbID} {...show}/>//using spread operator
    ))}
    </div>
    </div>
        
)

//we can use props-types here to check for run time errors but prop-types are mostly used for the summery of a component that that this component required and spitting out on the window
export default Search;
