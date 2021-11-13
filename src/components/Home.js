import React from "react";
import { Link } from "react-router-dom"

const Home = (props) => {
    return(
        <body>
           <h2>Coding Fuel!!</h2>
            <Link className="pizza" to="/pizza" >Pizza Time</Link>
            
        </body>
    )
}
export default Home