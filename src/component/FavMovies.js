import {useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Navbar from "./Navbars";
import ModalMovieUpdate from "./ModalMovieUpdate";
import axios from "axios";


function FavMovies(){
    const imagePath="http://image.tmdb.org/t/p/w500/";
    
    const [favArr,setFavArr] = useState([]);
    // const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setclickedMovie] = useState({});
    const[showFlagUpdate,setShowFlagUpdate]=useState(false);
    const [newArr,setNewArr] = useState([])

    // const handleShow = (item) => {
    //     setShowFlag(true)
    //     // console.log("commet move",item)
    //     setclickedMovie(item)
    // }
    

    const showUpdateModal = (item) => {
        setShowFlagUpdate(true);
        setclickedMovie(item);
        console.log(item);
    }
const handleClose = () => {
    setShowFlagUpdate(false)
    }

    const deleteFavMovie = (item) =>{
        console.log("delete obj",item)
        const serverURL=`${process.env.REACT_APP_serverURL}/deleteMovies/${item.id}`
        axios.delete(serverURL)
        .then(response=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const takeNewDataFromUpdatedModal = (arr)=>{
        setNewArr(arr)
        // console.log(newArr)
    }

    const getFavMovie = () =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/getMovies`;
        fetch(serverURL)
        .then((response)=>{
            response.json()
            .then(data=>{
                setFavArr(data)
                // console.log(data)
            })
        })
    }
    useEffect(()=>{  
          getFavMovie();
        setNewArr(favArr)
    },[favArr])

return (
    <>
    <Navbar/>
    <h1 style={{padding:"55px"}}>Favorite Movies</h1>

    <div style={{display:"flex" , flexWrap:"wrap",gap:"20px" ,justifyContent:"center"}}>
    
   
     {newArr.map(item => {
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
                            <Button variant="primary" onClick={()=>{showUpdateModal(item)}}>Update</Button>
                            &nbsp;
                            <Button variant="danger" onClick={()=>{deleteFavMovie(item)}}>Delete</Button>

                        </Card.Body>
                    </Card>
                )
            })}
                        {/* <ModalMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}/> */}
                        <ModalMovieUpdate showFlagUpdate={showFlagUpdate} handleClose={handleClose} clickedMovie={clickedMovie} 
                        takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}
                        />
    </div></>
)

}
export default FavMovies;