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
                                <img src="./HudsonYards.JPG" alt="Profile Image" className="img-fluid profile-image" />
                            </div>
                            <div className="col-lg-6">
                                <p><h2>Hi, I'm Kelly.</h2></p>
                                <p>I'm a New York City tour guide specializing in walking tours. I'm originally from Campinas, Sao Paulo, Brazil.</p>
                                <p>I came to New York in 2015 to study English and
                                    fell in love with the city!</p>
                                <p><i><b>I speak Portuguese, English, and Spanish!</b></i></p>
                                <p>I look forward to scheduling a walking tour with you whether you are visiting New York on a solo trip,
                                    with your friends or spouse, or your entire family!
                                </p>
                                <p>I can also book:</p>

                                <ol><b>Airport transfers</b></ol>
                                <ol><b>Bus tours</b></ol>
                                <ol><b>Broadway tickets</b></ol>
                                <ol><b>City Go passes</b></ol>
                                <ol><b>Museums</b></ol>
                                <ol><b>Subway or Public Transportation passes</b></ol>
                                <ol><b>Your own private car tour so you don't have to walk :)</b></ol>
                                <p>When I'm not working, I enjoy traveling and spending time with my family. We live in Queens.
                                    Outside of Manhattan, we enjoy visiting different parts of the city and upstate New York as well.</p>
                                <p>Here are a few of them:</p>
                                <p>Flushing Meadows Park, Forest Park,
                                    Queens County Farm, Dumbo with Time Out NY restaurants and the carousel, Coney Island and Rockaway Beaches, Jones Beach, Orchard Beach in the Bronx, the Bronx Zoo,
                                    Montauk and the Hamptons, Lavender by the Bay in Long Island, the Staten Island Ferry, South Beach in Staten Island, Snug Harbor in Staten Island, Croton Gorge Park,
                                    the Storm King Art Center, Bear Mountain, Cold Springs, Beacon, Ithaca, Buffalo and Niagara Falls, and any playground for our daughter!
                                </p>

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
                                <img src="./ElegantLadies.JPG" alt="Photo 2" className="img-fluid" />
                            </div>
                            <div className="col-lg-4">
                                <img src="./LittleIsland.JPG" alt="Photo 3" className="img-fluid" />
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
