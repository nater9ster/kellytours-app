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
                                <img src="./HudsonYards.JPG" alt="In front of Hudson Yards" className="img-fluid profile-image" />
                                <img src="./Bridge1.JPG" alt="Brooklyn Bridge" className="img-fluid profile-image mx-auto d-block my-3" />
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
                                <ol><b>Hotels</b></ol>
                                <ol><b>Broadway tickets</b></ol>
                                <ol><b>Go City passes</b></ol>
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
                                </p>< br />
                                <p><h2>Olá, meu nome é Kelly.</h2></p>
                                <p>Sou guia turístico de Nova York especializado em passeios a pé. Sou natural de Campinas, São Paulo, Brasil.</p>
                                <p>Vim para Nova York em 2015 para estudar inglês e
                                    me apaixonei pela cidade!</p>
                                <p><i><b>Falo português, inglês e espanhol!</b></i></p>
                                <p>Estou ansioso para agendar um passeio a pé com você, quer você esteja visitando Nova York em uma viagem solo,
                                    com seus amigos ou cônjuge, ou com toda a sua família!
                                </p>
                                <p>Também posso reservar:</p>

                                <ol><b>Transferências de aeroporto</b></ol>
                                <ol><b>Hotéis</b></ol>
                                <ol><b>Ingressos da Broadway</b></ol>
                                <ol><b>Passes Go City</b></ol>
                                <ol><b>Museus</b></ol>
                                <ol><b>Passes de metrô ou transporte público</b></ol>
                                <ol><b>Seu próprio passeio de carro particular para que você não precise caminhar :)</b></ol>
                                <p>Quando não estou trabalhando, gosto de viajar e passar tempo com minha família. Vivemos no Queens.
                                    Fora de Manhattan, gostamos de visitar diferentes partes da cidade e também do interior do estado de Nova York.</p>
                                <p>Aqui estão alguns deles:</p>
                                <p>Parque Flushing Meadows, Parque Florestal,
                                    Queens County Farm, Dumbo com os restaurantes Time Out NY e o carrossel, Coney Island e Rockaway Beaches, Jones Beach, Orchard Beach no Bronx, o Zoológico do Bronx,
                                    Montauk e os Hamptons, Lavender by the Bay em Long Island, Staten Island Ferry, South Beach em Staten Island, Snug Harbor em Staten Island, Croton Gorge Park,
                                    o Storm King Art Center, Bear Mountain, Cold Springs, Beacon, Ithaca, Buffalo e Niagara Falls, e qualquer playground para nossa filha!
                                </p><br />
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
                                <img src="./FunTimesSquare.JPG" alt="1" className="img-fluid" />
                            </div>
                            <div className="col-lg-4">
                                <img src="./ElegantLadies.JPG" alt="2" className="img-fluid" />
                            </div>
                            <div className="col-lg-4">
                                <img src="./LittleIsland.JPG" alt="3" className="img-fluid" />
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
