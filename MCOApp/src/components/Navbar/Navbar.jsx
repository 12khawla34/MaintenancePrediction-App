import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {

    const [aboutVisible, setAboutVisible] = useState(false);

    const handleClickAbout = () => {
        setAboutVisible(!aboutVisible);
    }



    return (
        <div>
            <div className="nav">
                <div className="nav-logo">IT-Solutions</div>
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>Explore</li>
                    <li onClick={handleClickAbout}>About</li>
                    <li className="nav-contact">Contact</li>
                </ul>

            </div>        
            {aboutVisible && (
                <div className="About">
                    <p>We are the It-Solutions campany, we stand for what's best for the It Industry !</p>    
                 </div>
            )}
        </div>

    )

};

export default Navbar;
