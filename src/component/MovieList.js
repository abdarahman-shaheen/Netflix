

import Movie from "./Movie";

function MovieList(props){

return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
        <h1>All movies</h1>
    <Movie MovieCard={props.MovieList}/>
  
            </div>
)
}
export default MovieList;