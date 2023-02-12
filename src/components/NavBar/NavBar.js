import React from "react";
import us_flag from "../../assets/imgs/us_flag.svg"
import ig from "../../assets/imgs/ig.svg"
import fb from "../../assets/imgs/fb.svg"

function NavBar() {
    return ( 
        <React.Fragment>
        <div className="" >
            <div className="navbar mainLayoutPadding" >
                <div className="uslogo" >
                    <img src={us_flag} alt="logo" />
                </div>
                <div>
                    <ul className="navbarList" >
                        <li>Home</li>
                        <li>Geography</li>
                        <li>Economy</li>
                        <li>Histroy</li>
                        <li>Culture & Society</li>
                        <li> <img src={ig} alt="ig" /> </li>
                        <li><img src={fb} alt="fb" /></li>
                    </ul>
                </div>
            </div>
            </div>
        </React.Fragment>
     );
}

export default NavBar;