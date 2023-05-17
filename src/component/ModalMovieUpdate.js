
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function ModalMovieUpdate(props){
    const imagePath="http://image.tmdb.org/t/p/w500/";

    const AddComment= async (e) =>{
        e.preventDefault();
               const obj = {
                   title: `${props.clickedMovie.title}`,
                  overview: `${props.clickedMovie.overview}`,
                   poster_path: `${props.clickedMovie.poster_path}`,
                  comment: e.target.comment.value,
               }
             console.log("update obj",obj);
               const serverURL = `${process.env.REACT_APP_serverURL}/updateMovies/${props.clickedMovie.id}`;
              const result =await axios.put(serverURL ,obj );
              
             
               // console.log(item)
               props.handleClose();

               console.log("the resutl url",result.data)
               props.takeNewDataFromUpdatedModal(result.data)



           }
    return(
        <>
        <Modal show={props.showFlagUpdate} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={imagePath+props.clickedMovie.poster_path} width='100%'></Image>
                    {props.clickedMovie.overview}
                   
                    <Form onSubmit={AddComment} >
                        <Form.Group className="mb-3">
                            <br/>
                            <Form.Label>My comment</Form.Label>
                            <Form.Control name="comment" type="text"  />
                        </Form.Group>
                      
                        <Button variant="primary" type="submit">Update</Button>
                    </Form>
    
                </Modal.Body>
                <Modal.Footer>
              
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default ModalMovieUpdate;