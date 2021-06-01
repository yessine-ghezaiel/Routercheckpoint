import { Button } from "react-bootstrap";
import React from 'react';
import '../App.css';
import StarRatingComponent from 'react-star-rating-component';



const MovieDescription =({movies,match,history}) => {
  
    return (
        <div className='MovieDescription'>
            <Button onClick={()=>history.push('/')}>Return Home</Button>
            <h1>{movies.find(movies=>movies.Id===match.params.Id).Title}</h1>
            <StarRatingComponent name='Rating' value={movies.find(movies=>movies.Id===match.params.Id).Rating} />
            <img style={{width:'800px', height:'800px'}} src={movies.find(movies=>movies.Id===match.params.Id).PosterURL} alt=''></img>
            <p style={{paddingRight:'300px',paddingLeft:'400px', textAlign:'center'}}> Description: <br /> {movies.find(movies=>movies.Id===match.params.Id).Description}</p>
            <iframe style={{width:'800px' ,height:'500px'}} src={movies.find(movies=>movies.Id===match.params.Id).Trailer} title="YouTube video player" frameborder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

        </div>
    )
}

export default MovieDescription
