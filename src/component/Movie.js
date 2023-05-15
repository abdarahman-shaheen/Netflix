
import {Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";
function Movie(props){
    const imagePath="http://image.tmdb.org/t/p/w500/";

    const addToFav = (item) =>{
        const serverURL = `http://localhost:3001/addMovies`;
        axios.post(serverURL , item )
        .then(response=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        // console.log(item)
    }
return(
    <>
      {/* <button onClick={getAllMemes}>Send a req</button> */}
      <h1>All movies</h1>
            {props.MovieCard.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={imagePath+item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                               <p>{item.overview}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{addToFav(item)}}>Add to Favorite</Button>
                        </Card.Body>
                    </Card>
                )
            })}
    </>
)
}

export default Movie;