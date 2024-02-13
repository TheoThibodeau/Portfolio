import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return(
       <Navbar className="newName">
            <h2 className="aboutMe">
                <a href="#about">About</a>
            </h2>
            <h2 className="projects">
                <a href="#projects">Projects</a>
            </h2>
            <h2 className="skills">
                <a href="#skills">Skills</a>
            </h2>
            <h2 className="experience">
                <a href="#experience">Experience</a>
            </h2>
        </Navbar>
    );
};

export default NavBar;