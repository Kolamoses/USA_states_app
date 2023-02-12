import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import States from "./States/States";

function Home() {
    return ( 
        <React.Fragment>
            <NavBar />
            <States />
            <Footer />
        </React.Fragment>
     );
}

export default Home;