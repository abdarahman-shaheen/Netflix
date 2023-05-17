

import Movie from "./Movie";

function MovieList(props){

return (
    <div style={{display:"flex",flexDirection:"column" }}>
        <h1 style={{padding:"55px"}}>Movie library</h1>
    <Movie MovieCard={props.MovieList}/>
            </div>
)
}
export default MovieList;