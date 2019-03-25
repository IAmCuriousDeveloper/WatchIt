import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

//we have make wrapper a link type and do all the to={'deails/imdbID} magic in that
const Wrapper = styled(Link)`
width:32%;
border:2px solid black;
border-radius : 20px;
margin-bottom:25px;
padding-right:10px;
overflow:hidden;
text-decoration:none;
color:black;
`;

const Image = styled.img`
width:46%;
float:left;
margin:right:10px;
`;

//what styled component do ?
//it just make a div(here you can do whatever html element) with bunch of css properties we define and the return the react component do that we can use it when ever we like for that component
//but its not inline coz inline is ineffiecinet what it will do eventually it creates a style tag with these css properties and give wrapper a class of that properties 

const ShowCard = (props) => (
        <Wrapper to={`details/${props.imdbID}`}>
        <Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} poster`}/>
        <div>
        <h3>{props.title}</h3>
        <h4>({props.year})</h4>
        <p>{props.description}</p>
        </div>
        </Wrapper>
    
);

export default ShowCard;
