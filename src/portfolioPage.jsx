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


const Profile = () => {

    const [selectedItem, setSelectedItem] = useState(false);

    const handleBugClick = () => {
        setSelectedItem(true);
    }

    return(
    <div className="mainContainer">
            <NavBar />

        <div class="hello-parent1">
            <svg class="theo-word" width="365" height="365" viewBox="0 0 365 100">
                <g id="T-letter">
                    <line class="T-vertical-stroke" x1="50" y1="20" x2="50" y2="120" stroke="#000" fill="none" stroke-width="20" />
                    <line class="T-horizontal-stroke" x1="20" y1="20" x2="80" y2="20" stroke="#000" fill="none" stroke-width="20" />
                </g>
                <g id="H-letter">
                    <line class="H-left-stroke" x1="110" y1="20" x2="110" y2="120" stroke="#000" fill="none" stroke-width="20" />
                    <line class="H-mid-stroke" x1="120" y1="70" x2="180" y2="70" stroke="#000" fill="none" stroke-width="20" />
                    <line class="H-right-stroke" x1="150" y1="20" x2="150" y2="120" stroke="#000" fill="none" stroke-width="20" />
                </g>
                <g id="E-letter">
                    <line class="E-left-stroke" x1="190" y1="120" x2="190" y2="20" stroke="#000" fill="none" stroke-width="20" />
                    <line class="E-top-stroke" x1="190" y1="30" x2="270" y2="30" stroke="#000" fill="none" stroke-width="20" />
                    <line class="E-mid-stroke" x1="190" y1="70" x2="260" y2="70" stroke="#000" fill="none" stroke-width="20" />
                    <line class="E-bottom-stroke" x1="190" y1="110" x2="270" y2="110" stroke="#000" fill="none" stroke-width="20" />
                </g>
                <g id="O-letter">
                    <circle class="O-stroke" cx="300" cy="70" r="45" stroke="#000" fill="none" stroke-width="20" />
                </g>
            </svg>
        </div>

        <div class="hello-parent2">
            <svg class="hello-word" width="auto" height="365" viewBox="0 0 350 300">
                <g id="T-letter">
                    <line class="T-vertical-stroke" x1="50" y1="20" x2="50" y2="120" stroke="#000" fill="none" stroke-width="20" />
                    <line class="T-horizontal-stroke" x1="20" y1="20" x2="80" y2="20" stroke="#000" fill="none" stroke-width="20" />
                </g>
                <g id="H-letter">
                    <line class="H-left-stroke" x1="110" y1="20" x2="110" y2="120" stroke="#000" fill="none" stroke-width="20" />
                    <line class="H-mid-stroke" x1="120" y1="70" x2="180" y2="70" stroke="#000" fill="none" stroke-width="20" />
                    <line class="H-right-stroke" x1="150" y1="20" x2="150" y2="120" stroke="#000" fill="none" stroke-width="20" />
                </g>
                <g id="I-letter">
                    <line class="I-top-stroke" x1="165" y1="30" x2="215" y2="30" stroke="#000" fill="none" stroke-width="20" />
                    <line class="I-vertical-stroke" x1="190" y1="20" x2="190" y2="120" stroke="#000" fill="none" stroke-width="20" />
                    <line class="I-bottom-stroke" x1="165" y1="110" x2="215" y2="110" stroke="#000" fill="none" stroke-width="20" />
                </g>

                <g id="B-letter" transform="translate(-25, 0)">
                    <line class="B-vertical-stroke" x1="260" y1="20" x2="260" y2="120" stroke="#000" fill="none" stroke-width="17" />
                    <line class="B-middle-stroke" x1="280" y1="70" x2="260" y2="70" stroke="#000" fill="none" stroke-width="20" />
                        <g id="O-letter">
                        <circle class="O-stroke" cx="280" cy="45" r="18" stroke="#000" fill="none" stroke-width="15" />
                        <circle class="O-stroke" cx="280" cy="95" r="18" stroke="#000" fill="none" stroke-width="15" />
                        </g>
                </g>

                <g id="O-letter" transform="translate(-25, 0)">
                    <circle class="O-stroke" cx="370" cy="70" r="42" stroke="#000" fill="none" stroke-width="20" />
                </g>

                <g id="D-letter" transform="translate(-15, 0)">
                    <line class="D-vertical-stroke" x1="435" y1="20" x2="435" y2="120" stroke="#000" fill="none" stroke-width="20" />
                    <path class="D-top-curve" d="M435,30 Q485,20 485,80" stroke="#000" fill="none" stroke-width="20" />
                    <path class="D-bottom-curve" d="M485,80 Q485,120 435,110" stroke="#000" fill="none" stroke-width="20" />
                </g>

                <g id="E-letter" transform="translate(-35, 0)">
                    <line class="E-left-stroke" x1="544" y1="120" x2="544" y2="20" stroke="#000" fill="none" stroke-width="20" />
                    <line class="E-top-stroke" x1="544" y1="30" x2="592" y2="30" stroke="#000" fill="none" stroke-width="20" />
                    <line class="E-mid-stroke" x1="544" y1="70" x2="586" y2="70" stroke="#000" fill="none" stroke-width="20" />
                    <line class="E-bottom-stroke" x1="544" y1="110" x2="592" y2="110" stroke="#000" fill="none" stroke-width="20" />
                </g>

                <g id="A-letter" transform="translate(-0, 0)">
                    <line class="A-left-diagonal" x1="615" y1="25" x2="575" y2="115" stroke="#000" fill="none" stroke-width="20" />
                    <line class="A-right-diagonal" x1="615" y1="25" x2="659" y2="115" stroke="#000" fill="none" stroke-width="20" />
                    <line class="A-horizontal" x1="596" y1="70" x2="642" y2="70" stroke="#000" fill="none" stroke-width="20" />
                    <line class="A-left-horizontal" x1="565" y1="110" x2="590" y2="110" stroke="#000" fill="none" stroke-width="20" />
                    <line class="A-right-horizontal" x1="669" y1="110" x2="634" y2="110" stroke="#000" fill="none" stroke-width="20" />
                </g>

                <g id="U-letter" transform="translate(600)">
                    <line class="U-left-vertical" x1="100" y1="20" x2="100" y2="100" stroke="#000" fill="none" stroke-width="20" />
                    <line class="U-right-vertical" x1="150" y1="20" x2="150" y2="100" stroke="#000" fill="none" stroke-width="20" />
                    <path class="U-bottom-curve" d="M100,120 Q120,160 150,100 Q180,40 200,100 Q230,160 250,120" stroke="#000" fill="none" stroke-width="20" />
                </g>
            </svg>
        </div>
            <h1>
                Theodore Thibodeau
            </h1>

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
                    <h1 className="giftfairyTitle">
                        GIFTFaiRY
                    </h1>
                    <p className="giftfairyDescription">
                        GIFTFaiRY🧚🏻 is your personal shopping assistant powered by artificial intelligence (OpenAI/ChatGPT 3.5). By asking you a series of tailored questions about the recipient, it harnesses the capabilities of AI to provided you with a curated list of ideal gift options!
                    </p>
                <div className="giftfairyHolder">
                    <div className="carousel">
                        <div className="carousel-item">
                            <img src={GiftFairy} height={300} />
                        </div>
                        <div className="carousel-item">
                            <img src={giftfairyRelationship} height={300} />
                        </div>
                        <div className="carousel-item">
                            <img src={giftfairyOccasion} height={300} />
                        </div>
                        <div className="carousel-item">                        
                            <img className="giftFairyPic" src={giftfairyGiftType} height={300} />
                        </div>
                        <div className="carousel-item">
                            <img className="giftFairyPic" src={giftfairyInterests} height={300} />
                        </div>
                        <div className="carousel-item">
                            <img className="giftFairyPic" src={giftfairyActivity} height={300} />
                        </div>
                        <div className="carousel-item">
                            <img className="giftFairyPic" src={giftfairyLoad} height={300} />
                        </div>
                        <div className="carousel-item">
                            <img className="giftFairyPic" src={giftfairyIdeas} height={300} />
                        </div>
                        <div className="carousel-item">
                            <img className="giftFairyPic" src={giftfairyAmazon} height={300} />
                        </div>
                    </div>
                </div>

                <div className="buttonContainer">
                        <button>
                        <a href="https://giftfairy.netlify.app/" className="button">
                            Website
                        </a>
                        </button>
                        <button>
                        <a href="https://github.com/TheoThibodeau/Giftfairy_FE" className="button">
                            GitHub Repo
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


        </div>
    );
};

export default Profile;