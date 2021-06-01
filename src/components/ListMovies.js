import React, {useState,useEffect} from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';





const ListMovies = ({movies,searchInput}) => {
const [filteredList, setFilteredList] = useState(movies);

console.log(movies)
    useEffect( () => {
        setFilteredList( 
        movies.filter(
        (movie) => 
        movie.Title.toLowerCase().includes(searchInput.searchInput) && movie.Rating >= searchInput.searchRate
        )
        );
        },[searchInput,movies]);
    return (
        <div className='display' >     
            {filteredList.map((el) => 
            <div key={el.Id} className='moviecard'>
                <Link to={`/description/${el.Id}`} style={{textDecoration: 'none',color:'black'}}> 
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={el.PosterURL} />
                    <Card.Body>
                        <Card.Title>{el.Title}</Card.Title>
                        <Card.Text>{el.Description}</Card.Text>
                        <StarRatingComponent name='Rating' value={el.Rating} />
                    </Card.Body>
                </Card>

                </Link>
                
            </div>
            )}
        </div>
    )
}

export default ListMovies
