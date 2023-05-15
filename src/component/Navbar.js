import { Link } from "react-router-dom";


function Navbar(){
return(
<>
<nav style={{display:"flex",justifyContent:"space-around"}}>
<Link to ="/">Home</Link>

<Link to ="/fav">Favorite</Link>
</nav>
</>

)
    
}
export default Navbar;