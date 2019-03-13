import React from "react";

const Details = (props)=>{
    const {title,description,trailer,poster,year,imdbID} = props.show;
    return (
        <div className="details">
        <header>
            <h1>WatchIT</h1>
        </header>
        <section>
            <h1>{title}</h1>
            <h2>({year})</h2>
            <img src={`/public/img/posters/${poster}`} alt={`image of ${title}`}/>
            <p>{description}</p>
        </section>
        <div>
            <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameborder="0" allowFullScreen title={`Trailer of ${title}`}></iframe>
        </div>
        </div>
    )
}

export default Details;