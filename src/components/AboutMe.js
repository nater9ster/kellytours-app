import React from "react";
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer";

const AboutMe = () => {
    return (
        <div>
            <Navbar />
            <div>
                <section id="about" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="./HudsonYards.JPG" alt="Profile Image" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <h2>About Me</h2>
                                <p>Hi, I'm Kelly! I'm a New York City tour guide specializing in walking tours for visiting Brazilians.</p>
                                <p>I'm originally from Campinas, Sao Paulo, Brazil, and enjoy traveling and spending time with my family.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section id="photos" className="photo-section">
                    <div className="container">
                        <div className="row photo-grid">
                            <div className="col-lg-4">
                                <img src="./FunTimesSquare.JPG" alt="Photo 1" className="img-fluid" />
                            </div>
                            <div className="col-lg-4">
                                <img src="./CentralPark.JPG" alt="Photo 2" className="img-fluid"/>
                            </div>
                            <div className="col-lg-4">
                                <img src="./ElegantLadies.JPG" alt="Photo 3" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;
