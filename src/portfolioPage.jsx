import NavBar from "./navbar";
import { useState } from 'react';
import TeddysBug from './images/Bug.png';


const Profile = () => {

    const [selectedItem, setSelectedItem] = useState(false);

    const handleBugClick = () => {
        setSelectedItem(true);
    }

    return(
        <div className="mainContainer">
            <NavBar />

            <h1 id="about">
                About
            </h1>

            <h3>
                Hello! My name is Theodore Thibodeau, I am a full-stack software engineer!
                After a prosperous career working in sensory deprivation float
                spas, I am making a big leap into the world of software developement. 
            </h3>

            <h3>
                I am a huge history buff, I love playing pickleball with my friends, and 
                spending time with my family.
            </h3>

            <h3>
                Fun Facts!
            </h3>

            <ul className="funFactsList" style={{ textAlign: "left" }}>
            <li>
                My first car was a 1968 Volkswagen Beetle that my Dad and I restored 
                and I still enjoy working on it in my spare time! 
                <svg id="more-arrows" viewBox="0 0 75 65" onClick={handleBugClick}>
                    <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </svg>
                {selectedItem && (
                    <img 
                    src={TeddysBug}
                    height={400}
                    width={400}
                    ></img>
                        // <img src="bug_image_url_here" alt="Bug" />
                    )}
            </li>


            <li>
                I was once an extra in the television show 'Eastbound and Down'.
            </li>
        
            <li>
                My wife is an Archaeologist and gets to travel around the World 
                and work on really awesome digs! She is currently in Saudi Arabia 
                working on the 'Line' Project!! 
            </li>
            <a href="https://www.youtube.com/shorts/K_0UCUwhk64">
                What is the 'Line'?
            </a>
            </ul>


            <h1 id="projects">
                Projects
            </h1>
            
            <div className="projectHolder">
                <div className="giftfairyHolder">
                    <h3 className="giftfairyTitle">
                        GIFTFaiRY
                    </h3>
                    <h4 className="giftfairyDescription">
                        GIFTFaiRY🧚🏻 is your personal shopping assistant powered by artificial intelligence (OpenAI/ChatGPT 3.5). By asking you a series of tailored questions about the recipient, it harnesses the capabilities of AI to provided you with a curated list of ideal gift options!
                    </h4>
                    <img
                    
                    >
                    </img>
                </div>
            </div>


        </div>
    );
};

export default Profile;