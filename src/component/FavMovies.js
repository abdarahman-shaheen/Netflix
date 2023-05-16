import {useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ModalMovie from "./ModalMovie";
import Navbar from "./Navbar";


function FavMovies(){
    const imagePath="http://image.tmdb.org/t/p/w500/";
    
    const [favArr,setFavArr] = useState([]);
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setclickedMovie] = useState({});
    
    const handleShow = (item) => {
        setShowFlag(true)
        // console.log("commet move",item)
        setclickedMovie(item)
    }
    const handleClose = () => {
        setShowFlag(false)
    }
    const getFavMemes = () =>{
        const serverURL = `http://localhost:3001/getMovies`;
        fetch(serverURL)
        .then((response)=>{
            response.json()
            .then(data=>{
                setFavArr(data)
                console.log(data)
            })
        })
    }
    useEffect(()=>{
        getFavMemes()
    },[])

return (
    <>
    <Navbar/>

    <h1>Favorite Movies</h1>

     {favArr.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={imagePath+item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p>{item.overview}</p><br/>
                                <h4>{`My comment`}</h4>
                                {item.comment}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{handleShow(item)}}>Update</Button>
                        </Card.Body>
                    </Card>
                )
            })}
                        <ModalMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}/>
    </>
)

}
export default FavMovies;