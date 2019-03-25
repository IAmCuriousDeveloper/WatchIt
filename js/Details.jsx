import React from "react";
import Header from "./Header";
import Spinner from './Spinner'
import axios from 'axios';

class Details extends React.Component{
    state = {
        apiData:{rating:''}
    }
    componentDidMount(){
        axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
        .then((Response)=>{
            this.setState({apiData:Response.data})
        });
    }
    render(){
        let ratingComponent;
        if(this.state.apiData.rating){
            ratingComponent = <h3>{this.state.apiData.rating}</h3>
        }else{
            ratingComponent=<Spinner/>
        }
    const {title,description,trailer,poster,year,imdbID} = this.props.show;
    return (
        <div className="details">
        <Header/>
        <section>
            <h1>{title}</h1>
            <h2>({year})</h2>
            {ratingComponent} 
            <img src={`/public/img/posters/${poster}`} alt={`image of ${title}`}/>
            <p>{description}</p>
        </section>
        <div>
            <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameborder="0" allowFullScreen title={`Trailer of ${title}`}></iframe>
        </div>
        </div>
    )
}
}

export default Details;