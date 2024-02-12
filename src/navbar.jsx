import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return(
        <div className='navBar'>
       <Navbar className="newName">
    <h3 className="aboutMe">
        <a href="#about">About</a>
    </h3>
    <h3 className="projects">
        <a href="#projects">Projects</a>
    </h3>
</Navbar>
        </div>
    );
};

export default NavBar;