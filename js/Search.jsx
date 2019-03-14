import React from 'react'
import Showcard from './ShowCard'
import Header from './Header';

class Search extends React.Component{
    state={
        SearchTerm:''
    }
    handleSearchTerm =(e)=>{
        this.setState({SearchTerm: e.target.value}) 
    }

    render(){
        return (
            <div className='search'>
           <Header handleSearchTerm={this.handleSearchTerm} showSearch SearchTerm={this.state.SearchTerm}/>
            <div>
                    {this.props.shows
                    .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.SearchTerm.toUpperCase()) >=0)
                    .map((show)=>( 
                    <Showcard key ={show.imdbID} {...show}/>//using spread operator
            ))}
            </div>
            </div>
        
    )
    }
    
}

//we can use props-types here to check for run time errors but prop-types are mostly used for the summery of a component that that this component required and spitting out on the window

//how i am searching string ?
//i just took the string title and description and check its index is present in state or not if yes it will return >0 if not it will return -1 which is false and im using uppercase to remove case sensitivity
export default Search;
