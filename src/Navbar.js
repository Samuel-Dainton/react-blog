import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/**
                 * Inline style needs a dynamic value {inside curly braces} and an {object} inside of that.
                 * The keys since we're typing in jsx need to be camel case, not like css which would be background-color.
                 */}
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;