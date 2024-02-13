import NavBar from "./navbar";
import { useState } from 'react';
import TeddysBug from './images/Bug.png';
import GiftFairy from './images/giftfairy.png';
import Catalyst from './images/catalyst.jpg';
import Momentors from './images/momentors.jpeg';
import giftfairyRelationship from './images/giftfairyRelationship.png';
import giftfairyOccasion from './images/giftfairyOccasion.png';
import giftfairyGiftType from './images/giftfairyGiftType.png';
import giftfairyInterests from './images/giftfairyInterests.png';
import giftfairyActivity from './images/giftfairyActivity.png';
import giftfairyLoad from './images/giftfairyLoad.png';
import giftfairyIdeas from './images/giftfairyIdeas.png';
import giftfairyAmazon from './images/giftfairyAmazon.png';
import profile from './images/profile.png';


const Profile = () => {

    const [selectedItem, setSelectedItem] = useState(false);

    const handleBugClick = () => {
        setSelectedItem(true);
    }

    return(
        <>
            <NavBar />
        <div className="newName">
            <svg viewBox="0 0 1160 300">
                <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="45%">Theodore</text>
                <br />
                <text textAnchor="middle" x="50%" y="95%">Thibodeau</text>
                </symbol>
                <g className="g-ants">
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                </g>
            </svg>
        </div>

        <div className="mainContainer">
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
                    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
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
                    <h1 className="giftfairyTitle">
                        GIFTFaiRY
                    </h1>
                    <p className="giftfairyDescription">
                        GIFTFaiRY🧚🏻 is your personal shopping assistant powered by artificial intelligence (OpenAI/ChatGPT 3.5). By asking you a series of tailored questions about the recipient, it harnesses the capabilities of AI to provided you with a curated list of ideal gift options!
                    </p>
                <div className="giftfairyHolder">
                <div className="cards">
                    <div className="card">
                        <img src={GiftFairy} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyRelationship} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyOccasion} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyGiftType} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyInterests} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyActivity} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyLoad} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyIdeas} height={400} />
                    </div>
                    <div className="card">
                        <img src={giftfairyAmazon} height={400} />
                    </div>
                    <div className="card">
                        <img src={profile} height={400} />
                    </div>
                </div>
                </div>

                <div className="buttonContainer">
                        <button class="button-42" role="button">
                        <a 
                        href="https://giftfairy.netlify.app/" 
                        className="button-link">
                            Website
                        </a>
                        </button>
                        <button class="button-42" role="button">
                        <a 
                        href="https://github.com/TheoThibodeau/Giftfairy_FE" 
                        className="button-link"> 
                            GitHub
                        </a>
                        </button>
                    </div>
            </div>

            <div className="projectHolder">
                <div className="catalystHolder">
                    <h3 className="catalystTitle">
                        Catalyst
                    </h3>
                    <p className="catalystDescription">
                        Catalyst is an app that puts the artist in the loop. Catalyst integrates with openAI’s API to create a responsive tool for generating unique and creative prompts. The prompts will then be used by the artist for inspiration and motivation to start creating.                    </p>
                    <img className="catalystPic"
                        src={Catalyst}
                        height={300}
                    >
                    </img>
                </div>
            </div>

            <div className="projectHolder">
                <div className="momentorsHolder">
                    <h3 className="momentorsTitle">
                        Momentum Mentors
                    </h3>
                    <p className="momentorsDescription">
                    Implemented an API call to TypeForm to allow mentors to help facilitate connections between students enrolled in the Momentum Learning Bootcamp and alumni for the purpose of arranging mentorship sessions. 
                    </p>
                    <img className="momentorsPic"
                        src={Momentors}
                        height={300}
                    >
                    </img>
                </div>
            </div>
        <h1 id="skills">
            Skills and Certifications
        </h1>

        <h1 id="experience">
            Professional Experience
        </h1>

        </div>
        </>
    );
};

export default Profile;