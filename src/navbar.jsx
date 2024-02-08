import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return(
        <div className='navBar'>
        <Navbar>
            <h3 className="aboutMe">
                <a href="#about" style={{color: "blue"}}>About</a>
            </h3>
            <h3 className="projects">
                <a href="#projects" style={{color: "blue"}}>Projects</a>
            </h3>
        </Navbar>
        </div>
    );
};

export default NavBar;